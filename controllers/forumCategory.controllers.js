const prisma = require('../models/prismaClient');
const { z } = require('zod');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const {
  forumMainCategorySchema,
  forumSubCategorySchema,
  updateForumMainCategorySchema,
  updateForumSubCategorySchema,
} = require('../validation/forum.validation');

// --- ForumMainCategory Controllers ---

// Create a new ForumMainCategory
module.exports.createForumMainCategory = async (req, res) => {
  try {
    // Validate request body
    const validationResult = forumMainCategorySchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Invalid input data',
        validationResult.error.errors,
      );
    }

    const { name, enabled } = validationResult.data;

    // Normalize name (trim and lowercase for comparison)
    const normalizedName = name.trim().toLowerCase();

    // Check for duplicate category name (case-insensitive)
    const existingCategory = await prisma.forumMainCategory.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } },
    });
    if (existingCategory) {
      throw new ApiError(409, 'Main category name already exists');
    }

    // Create new category
    const newCategory = await prisma.forumMainCategory.create({
      data: {
        name: name.trim(),
        enabled,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, newCategory, 'Main category created successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2002') {
      console.error('Database constraint violation:', error);
      return res
        .status(409)
        .json(
          new ApiError(409, 'Main category name already exists', error.message),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(
        `Error creating ForumMainCategory: ${error.message}`,
        error,
      );
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error creating ForumMainCategory:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create main category due to server error',
          error.message,
        ),
      );
  }
};

// Update an existing ForumMainCategory
module.exports.updateForumMainCategory = async (req, res) => {
  try {
    // Validate ID parameter
    const idSchema = z.object({ id: z.string().uuid() });
    const idValidation = idSchema.safeParse(req.params);
    if (!idValidation.success) {
      throw new ApiError(400, 'Invalid category ID', idValidation.error.errors);
    }

    // Validate request body
    const bodyValidation = updateForumMainCategorySchema.safeParse(req.body);
    if (!bodyValidation.success) {
      throw new ApiError(
        400,
        'Invalid update data',
        bodyValidation.error.errors,
      );
    }

    const { id } = idValidation.data;
    const data = bodyValidation.data;

    // Verify category exists
    const category = await prisma.forumMainCategory.findUnique({
      where: { id },
    });
    if (!category) {
      throw new ApiError(404, 'Main category not found');
    }

    // Check for duplicate name if name is being updated
    if (data.name && data.name !== category.name) {
      const existingCategory = await prisma.forumMainCategory.findFirst({
        where: { name: { equals: data.name, mode: 'insensitive' } },
      });
      if (existingCategory) {
        throw new ApiError(409, 'Main category name already exists');
      }
      data.name = data.name.trim();
    }

    // Update category
    const updatedCategory = await prisma.forumMainCategory.update({
      where: { id },
      data,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedCategory,
          'Main category updated successfully',
        ),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2002') {
      console.error('Database constraint violation:', error);
      return res
        .status(409)
        .json(
          new ApiError(409, 'Main category name already exists', error.message),
        );
    }
    if (error.code === 'P2025') {
      console.error('Record not found for update:', error);
      return res
        .status(404)
        .json(new ApiError(404, 'Main category not found', error.message));
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(
        `Error updating ForumMainCategory: ${error.message}`,
        error,
      );
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error updating ForumMainCategory:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update main category due to server error',
          error.message,
        ),
      );
  }
};

// Get a ForumMainCategory by ID
module.exports.getForumMainCategoryById = async (req, res) => {
  try {
    // Validate ID parameter
    const idSchema = z.object({ id: z.string().uuid() });
    const validationResult = idSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Invalid category ID',
        validationResult.error.errors,
      );
    }

    const { id } = validationResult.data;
    const includeSubCategories = req.query.includeSubCategories === 'true';
    const includePosts = req.query.includePosts === 'true';

    // Fetch category with optional includes
    const category = await prisma.forumMainCategory.findUnique({
      where: { id },
      include: {
        subCategory: includeSubCategories
          ? {
              include: includePosts
                ? { quotePost: true, generalPost: true }
                : undefined,
            }
          : undefined,
        quotePost: includePosts,
        generalPost: includePosts,
      },
    });

    if (!category) {
      throw new ApiError(404, 'Main category not found');
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, category, 'Main category retrieved successfully'),
      );
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(
        `Error fetching ForumMainCategory by ID: ${error.message}`,
        error,
      );
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error fetching ForumMainCategory by ID:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch main category due to server error',
          error.message,
        ),
      );
  }
};

// Get all ForumMainCategories
module.exports.getAllForumMainCategories = async (req, res) => {
  try {
    const includeSubCategories = req.query.includeSubCategories === 'true';

    // Fetch all categories
    const categories = await prisma.forumMainCategory.findMany({
      include: includeSubCategories ? { subCategory: true } : undefined,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          categories,
          'Main categories retrieved successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error fetching all ForumMainCategories:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch main categories due to server error',
          error.message,
        ),
      );
  }
};

// --- ForumSubCategory Controllers ---

// Create a new ForumSubCategory
module.exports.createForumSubCategory = async (req, res) => {
  try {
    // Validate request body
    const validationResult = forumSubCategorySchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Invalid input data',
        validationResult.error.errors,
      );
    }

    const { name, enabled, mainCategoryId } = validationResult.data;

    // Verify main category exists
    const mainCategory = await prisma.forumMainCategory.findUnique({
      where: { id: mainCategoryId },
    });
    if (!mainCategory) {
      throw new ApiError(404, 'Main category not found');
    }

    // Check for duplicate subcategory name within the same main category
    const existingSubCategory = await prisma.forumSubCategory.findFirst({
      where: {
        name: { equals: name.trim(), mode: 'insensitive' },
        mainCategoryId: mainCategoryId,
      },
    });

    if (existingSubCategory) {
      throw new ApiError(
        409,
        `Subcategory name '${name.trim()}' already exists in this main category`,
      );
    }

    // Create new subcategory
    const newCategory = await prisma.forumSubCategory.create({
      data: {
        name: name.trim(),
        enabled,
        mainCategoryId,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, newCategory, 'Subcategory created successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error('Foreign key constraint failed:', error);
      return res
        .status(404)
        .json(new ApiError(404, 'Main category not found', error.message));
    }
    if (error.code === 'P2002') {
      console.error('Database constraint violation:', error);
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            `Subcategory name '${req.body.name}' already exists in this main category`,
            error.message,
          ),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error creating ForumSubCategory: ${error.message}`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error creating ForumSubCategory:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create subcategory due to server error',
          error.message,
        ),
      );
  }
};

// Update an existing ForumSubCategory
module.exports.updateForumSubCategory = async (req, res) => {
  try {
    // Validate ID parameter
    const idSchema = z.object({ id: z.string().uuid() });
    const idValidation = idSchema.safeParse(req.params);
    if (!idValidation.success) {
      throw new ApiError(
        400,
        'Invalid subcategory ID',
        idValidation.error.errors,
      );
    }

    // Validate request body
    const bodyValidation = updateForumSubCategorySchema.safeParse(req.body);
    if (!bodyValidation.success) {
      throw new ApiError(
        400,
        'Invalid update data',
        bodyValidation.error.errors,
      );
    }

    const { id } = idValidation.data;
    const { mainCategoryId, ...data } = bodyValidation.data;

    // Verify subcategory exists
    const category = await prisma.forumSubCategory.findUnique({
      where: { id },
    });
    if (!category) {
      throw new ApiError(404, 'Subcategory not found');
    }

    // Verify main category exists if provided
    if (mainCategoryId) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: mainCategoryId },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
      data.mainCategoryId = mainCategoryId;
    }

    // Check for duplicate name if name is being updated
    if (data.name && data.name.trim() !== category.name) {
      const targetMainCategoryId = mainCategoryId || category.mainCategoryId;

      const existingSubCategory = await prisma.forumSubCategory.findFirst({
        where: {
          name: { equals: data.name.trim(), mode: 'insensitive' },
          mainCategoryId: targetMainCategoryId,
          id: { not: id }, // Exclude current subcategory from check
        },
      });

      if (existingSubCategory) {
        throw new ApiError(
          409,
          `Subcategory name '${data.name.trim()}' already exists in this main category`,
        );
      }
    }

    // Trim name if provided
    if (data.name) {
      data.name = data.name.trim();
    }

    // Update subcategory
    const updatedCategory = await prisma.forumSubCategory.update({
      where: { id },
      data,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedCategory,
          'Subcategory updated successfully',
        ),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2025') {
      console.error('Record not found for update:', error);
      return res
        .status(404)
        .json(new ApiError(404, 'Subcategory not found', error.message));
    }
    if (error.code === 'P2003') {
      console.error('Foreign key constraint failed:', error);
      return res
        .status(404)
        .json(new ApiError(404, 'Main category not found', error.message));
    }
    if (error.code === 'P2002') {
      console.error('Database constraint violation:', error);
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            `Subcategory name already exists in this main category`,
            error.message,
          ),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error updating ForumSubCategory: ${error.message}`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error updating ForumSubCategory:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update subcategory due to server error',
          error.message,
        ),
      );
  }
};

// Get a ForumSubCategory by ID
module.exports.getForumSubCategoryById = async (req, res) => {
  try {
    const idSchema = z.object({ id: z.string().uuid() });
    const validationResult = idSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Invalid subcategory ID',
        validationResult.error.errors,
      );
    }

    const { id } = validationResult.data;
    const includePosts = req.query.includePosts === 'true';

    const category = await prisma.forumSubCategory.findUnique({
      where: { id },
      include: {
        mainCategory: true,
        quotePost: includePosts && {
          where: { status: 'success' }, // Filter for successful quote posts
          include: {
            quoteLike: true,
            quoteReply: true,
            user: { select: { id: true, name: true, profilePic: true } },
          },
        },
        generalPost: includePosts && {
          where: { status: 'success' }, // Filter for successful general posts
          include: {
            generalLike: true,
            generalReply: true,
            user: { select: { id: true, name: true, profilePic: true } },
          },
        },
      },
    });

    if (!category) {
      throw new ApiError(404, 'Subcategory not found');
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, category, 'Subcategory retrieved successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(
        `Error fetching ForumSubCategory by ID: ${error.message}`,
        error,
      );
      return res.status(error.statusCode).json(error);
    }

    console.error('Unexpected error fetching ForumSubCategory by ID:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch subcategory due to server error',
          error.message,
        ),
      );
  }
};

// Get all ForumSubCategories
module.exports.getAllForumSubCategories = async (req, res) => {
  try {
    // Fetch all subcategories
    const categories = await prisma.forumSubCategory.findMany({
      include: { mainCategory: true },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          categories,
          'Subcategories retrieved successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error fetching all ForumSubCategories:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch subcategories due to server error',
          error.message,
        ),
      );
  }
};
