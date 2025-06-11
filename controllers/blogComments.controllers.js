const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const BlogCommentSchema = require('../validation/blogComment.validation');
const { sendEmail } = require('../utils/sendEmail');

const createComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { id: userId } = req.loggedInUser;
    if (!blogId) {
      throw new ApiError(404, 'Blog ID is required', 'blogId not found');
    }
    const { comment, parentId = null } = req.body;
    const validateComment = BlogCommentSchema.safeParse(req.body);
    if (!validateComment.success) {
      throw new ApiError(401, 'Validation error', validateComment.error.errors);
    }
    const newComment = await prisma.blogComment.create({
      data: {
        blogId: blogId,
        userId: userId,
        status: 'pending',
        comment: comment,
        parentId: parentId,
      },
    });
    if (!newComment) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while creating comment',
      );
    }
    res
      .status(200)
      .json(new ApiResponse(200, newComment, 'Comment added successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!blogId) {
      throw new ApiError(404, 'Post id Required', 'Post Id not found');
    }
    const allPostComments = await prisma.blogComment.findMany({
      where: {
        status: 'accepted',
        blogId: blogId,
        parentId: null,
      },
      include: {
        user: {
          select: {
            name: true,
            profilePic: true,
            online: true,
          },
        },
        replies: {
          where: {
            status: 'accepted',
          },
          select: {
            parentId: true,
            comment: true,
            user: {
              select: {
                name: true,
                profilePic: true,
                online: true,
              },
            },
            createdAt: true,
          },
        },
      },
    });
    if (!allPostComments) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while fetching comments',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(200, allPostComments, 'Comments fetched successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const approveOrRejectComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    if (!commentId) {
      throw new ApiError(404, 'Comment Id is required', 'Comment Id missing');
    }

    const { status } = req.body;
    if (!['accepted', 'rejected'].includes(status)) {
      throw new ApiError(401, 'Invalid status', 'Please send correct status');
    }

    const updatedComment = await prisma.blogComment.update({
      where: { id: commentId },
      data: { status },
      include: {
        parentComment: {
          include: {
            user: {
              select: { name: true, email: true },
            },
          },
        },
        user: {
          select: { name: true, email: true },
        },
      },
    });

    if (!updatedComment) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while updating the comment status',
      );
    }

    const acceptedHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #2e6c80;">Your comment was ${status} by admin</h2>

        <p><strong>Your comment:</strong></p>
        <blockquote style="margin: 10px 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #ccc;">
          ${updatedComment.comment}
        </blockquote>

        ${
          status === 'accepted'
            ? `<p style="color: green;">You can now see your comment on the website.</p>`
            : `<p style="color: red;">Unfortunately, your comment was not approved.</p>`
        }
      </div>
    `;

    // await sendEmail({
    //   to: updatedComment?.user?.email,
    //   subject: `Update on your comment status`,
    //   html: acceptedHtml,
    // });

    // if (status === 'accepted' && updatedComment.parentComment?.user?.email) {
    //   const parentCommentHtml = `
    //     <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    //       <h2 style="color: #2e6c80;">Your comment has a reply</h2>

    //       <p><strong>Your comment:</strong></p>
    //       <blockquote style="margin: 10px 0; padding: 10px; background-color: #f1f1f1; border-left: 4px solid #ccc;">
    //         ${updatedComment.parentComment.comment || 'N/A'}
    //       </blockquote>

    //       <p><strong>Comment reply:</strong></p>
    //       <blockquote style="margin: 10px 0; padding: 10px; background-color: #e9f7ef; border-left: 4px solid #28a745;">
    //         ${updatedComment.comment || 'N/A'}
    //       </blockquote>
    //     </div>
    //   `;

    //   await sendEmail({
    //     to: updatedComment.parentComment.user.email,
    //     subject: `Your comment has a reply`,
    //     html: parentCommentHtml,
    //   });
    // }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedComment,
          'Comment status updated successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Internal server error',
          error.message || 'Unknown error',
        ),
      );
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;
    if (!commentId) {
      throw new ApiError(
        400,
        'Comment Id required',
        'Please provide comment Id',
      );
    }

    const { id: userId } = req.loggedInUser;

    const commentToBeDeleted = await prisma.blogComment.findFirst({
      where: {
        id: commentId,
      },
      include: {
        replies: true,
      },
    });

    if (!commentToBeDeleted) {
      throw new ApiError(
        404,
        'Comment not found',
        'No comment exists with the given ID',
      );
    }

    if (commentToBeDeleted.userId !== userId) {
      throw new ApiError(
        401,
        'Unauthorized',
        'You are not the owner of this comment',
      );
    }

    const deletedComment = await prisma.blogComment.delete({
      where: {
        id: commentId,
        userId: userId,
      },
    });

    if (commentToBeDeleted.replies.length > 0) {
      await prisma.blogComment.deleteMany({
        where: {
          parentId: commentId,
        },
      });
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, deletedComment, 'Comment deleted successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getAllPendingComments = async (req, res) => {
  try {
    const allPendingComments = await prisma.blogComment.findMany({
      where: {
        status: 'pending',
      },
      include: {
        parentComment: {
          include: {
            user: {
              select: {
                name: true,
                profilePic: true,
                online: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            profilePic: true,
            online: true,
          },
        },
      },
    });
    if (!allPendingComments) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while fetching the pending comments',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          allPendingComments,
          'All pending comments fetched successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;

    if (!commentId) {
      throw new ApiError(400, 'Comment Id required', 'Comment Id missing');
    }

    const commentData = await prisma.blogComment.findFirst({
      where: {
        id: commentId,
        status: 'pending',
      },
      include: {
        parentComment: {
          include: {
            user: {
              select: {
                name: true,
                profilePic: true,
                online: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            profilePic: true,
            online: true,
          },
        },
      },
    });

    if (!commentData) {
      throw new ApiError(
        404,
        'Comment not found',
        'No pending comment with this ID',
      );
    }

    return res
      .status(200)
      .json(new ApiResponse(200, commentData, 'Comment fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getChildCommentsByParentId = async (req, res) => {
  try {
    const { parentCommentId } = req.params;
    if (!parentCommentId) {
      throw new ApiError(
        404,
        'Parent Comment Id required',
        'Missing Parent Comment Id',
      );
    }
    const childComments = await prisma.blogComment.findMany({
      where: {
        status: 'accepted',
        parentId: parentCommentId,
      },
      include: {
        user: {
          select: {
            name: true,
            profilePic: true,
            online: true,
          },
        },
      },
    });
    if (!childComments) {
      throw new ApiError(
        500,
        'Interal server error',
        'Something went wrong while fetching the comments, Please try again',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          childComments,
          'Child comments fetched successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

module.exports = {
  createComment,
  getCommentsByPostId,
  approveOrRejectComment,
  deleteCommentById,
  getAllPendingComments,
  getCommentById,
  getChildCommentsByParentId,
};
