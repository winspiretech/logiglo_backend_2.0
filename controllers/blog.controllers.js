const BlogSchema = require('../validation/blog.validation');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const test = (req, res) => {
  res.send(req.user);
};

const createBlog = async (req, res) => {
  try {
    const { name, id } = req.user;
    const { description, categoryName, ...rest } = req.body;

    if (!description) {
      throw new ApiError(400, 'Validation Error', 'Description is required');
    }

    const validateData = BlogSchema.safeParse(req.body);
    if (!validateData.success) {
      throw new ApiError(400, 'Validation Error', validateData.error.errors);
    }

    let category = null;
    if (categoryName && categoryName.trim() !== '') {
      const formattedName =
        categoryName.trim().charAt(0).toUpperCase() +
        categoryName.trim().slice(1).toLowerCase();

      category = await prisma.blogCategory.findFirst({
        where: {
          name: {
            equals: formattedName,
            mode: 'insensitive',
          },
        },
      });

      if (!category) {
        category = await prisma.blogCategory.create({
          data: { name: formattedName },
        });
      }
    }

    const newBlog = await prisma.blog.create({
      data: {
        ...rest,
        authorId: id,
        description,
        categoryId: category?.id
      },
    });

    if (!newBlog) {
      throw new ApiError(
        500,
        'Something went wrong while creating blog, Please try again',
      );
    }

    res
      .status(200)
      .json(new ApiResponse(200, newBlog, 'Blog created successfully'));
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


const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await prisma.blog.findMany();
    if (!allBlogs) {
      throw new ApiError(500, 'Something went wrong while fetching blogs');
    }
    res
      .status(200)
      .json(new ApiResponse(200, allBlogs, 'Blogs fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, 'Id is required', 'Id is required');
    }
    const blog = await prisma.blog.findFirst({
      where: {
        id
      }
    });
    if (!blog) {
      throw new ApiError(500, 'Something went wrong while fetching blog');
    }
    res
      .status(200)
      .json(new ApiResponse(200, blog, 'Blog fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, 'Id is required', 'Id is required');
    }
    const { title, description } = req.body;
    if (!title || !description) {
      throw new ApiError(
        400,
        'All fields are required',
        'Title or description is empty',
      );
    }
    const updatedBlog = await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        ...req.body,
      },
    });
    res
      .status(200)
      .json(new ApiResponse(200, updatedBlog, 'Blog updated successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, 'Blog Id is required', 'Blog Id is required');
    }
    const blog = await prisma.blog.delete({
      where: {
        id
      }
    });
    if (!blog) {
      throw new ApiError(500, 'Something went wrong while deleting blog');
    }
    res
      .status(200)
      .json(new ApiResponse(200, blog, 'Blog deleted successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

module.exports = { test, createBlog, getAllBlogs, getBlog, editBlog, deleteBlog };
