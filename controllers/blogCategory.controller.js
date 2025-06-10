const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const createBlogCategory = async (req, res) => {
    try {
        const { blogCategory } = req.body;
        if (!blogCategory) {
            throw new ApiError(404, "Blog category required", "Blog category missing");
        }
        const formattedName = blogCategory.trim().charAt(0).toUpperCase() +
            blogCategory.trim().slice(1).toLowerCase();
        const prevData = await prisma.blogCategory.findFirst({
            where: {
                name: {
                    equals: formattedName,
                    mode: 'insensitive'
                }
            }
        });
        if (prevData) {
            throw new ApiError(400, "The blog category alredy exists", "Blog category exists");
        }
        const newCategory = await prisma.blogCategory.create({
            data: {
                name: formattedName,
            }
        });
        if (!newCategory) {
            throw new ApiError(500, "Internal server error", "Something went wrong while creating new category");
        }
        res.status(200)
            .json(new ApiResponse(200, newCategory, "New category created successfully"));
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
}

const getAllBlogCategory = async (req, res) => {
    try {
        const allCategories = await prisma.blogCategory.findMany({});
        if (!allCategories) {
            throw new ApiError(500, "Internal server error", "Something went wrong please try again");
        }
        res.status(200)
            .json(new ApiResponse(200, allCategories, "Blog categories fetched succcessfully"))
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
}

const editBlogCategory = async (req, res) => {
    try {
        const {  categoryId } = req.params;
        const { newValue } = req.body;

        if (!categoryId) {
            throw new ApiError(400, 'Validation Error', 'Blog Category ID is required');
        }
        if ( !newValue) {
            throw new ApiError(404, " New value is missing", "Required value missing")
        };
        const formattedName = newValue.trim().charAt(0).toUpperCase() +
            newValue.trim().slice(1).toLowerCase();
        const updatedValue = await prisma.blogCategory.update({
            where: {
                id: categoryId
            },
            data: {
                name: formattedName
            }
        });
        if (!updatedValue) {
            throw new ApiError(500, "Internal server error", "Something went wrong while updating value")
        };
        res.status(200)
            .json(new ApiResponse(200,updatedValue,"Category updated successfully"))
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
}

const deleteBlogCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if (!categoryId) {
            throw new ApiError(400, 'Validation Error', 'Blog Category ID is required');
        }

        const deletedCategory = await prisma.blogCategory.delete({
            where : {
                id : categoryId
            }
        });
        if(!deletedCategory){
            throw new ApiError(500,"Internal server error","Something went wrong while deleting the blog category")
        }
        res.status(200)
            .json(new ApiResponse(200,deletedCategory,"Category deleted successfully"))
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
}

module.exports = { createBlogCategory, getAllBlogCategory, deleteBlogCategory, editBlogCategory }