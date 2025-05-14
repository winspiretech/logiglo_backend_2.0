const prisma = require('../models/prismaClient');
const { z } = require('zod');
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
    const validationResult = forumMainCategorySchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    const { name, enabled } = validationResult.data;

    const newCategory = await prisma.forumMainCategory.create({
      data: {
        name,
        enabled,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating ForumMainCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing ForumMainCategory
module.exports.updateForumMainCategory = async (req, res) => {
  try {
    const idSchema = z.object({ id: z.string().uuid() });
    const idValidation = idSchema.safeParse(req.params);
    if (!idValidation.success) {
      return res.status(400).json({ error: idValidation.error.errors });
    }

    const bodyValidation = updateForumMainCategorySchema.safeParse(req.body);
    if (!bodyValidation.success) {
      return res.status(400).json({ error: bodyValidation.error.errors });
    }

    const { id } = idValidation.data;
    const data = bodyValidation.data;

    // Verify category exists
    const category = await prisma.forumMainCategory.findUnique({
      where: { id },
    });
    if (!category) {
      return res.status(404).json({ error: 'Main category not found' });
    }

    const updatedCategory = await prisma.forumMainCategory.update({
      where: { id },
      data,
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error('Error updating ForumMainCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a ForumMainCategory by ID
module.exports.getForumMainCategoryById = async (req, res) => {
  try {
    const idSchema = z.object({ id: z.string().uuid() });
    const validationResult = idSchema.safeParse(req.params);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    const { id } = validationResult.data;
    const includeSubCategories = req.query.includeSubCategories === 'true';
    const includePosts = req.query.includePosts === 'true';

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
      return res.status(404).json({ error: 'Main category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching ForumMainCategory by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all ForumMainCategories
module.exports.getAllForumMainCategories = async (req, res) => {
  try {
    const includeSubCategories = req.query.includeSubCategories === 'true';

    const categories = await prisma.forumMainCategory.findMany({
      include: includeSubCategories ? { subCategory: true } : undefined,
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching all ForumMainCategories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// --- ForumSubCategory Controllers ---

// Create a new ForumSubCategory
module.exports.createForumSubCategory = async (req, res) => {
  try {
    const validationResult = forumSubCategorySchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    const { name, enabled, mainCategoryId } = validationResult.data;

    // Verify main category exists
    const mainCategory = await prisma.forumMainCategory.findUnique({
      where: { id: mainCategoryId },
    });
    if (!mainCategory) {
      return res.status(404).json({ error: 'Main category not found' });
    }

    const newCategory = await prisma.forumSubCategory.create({
      data: {
        name,
        enabled,
        mainCategoryId,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating ForumSubCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing ForumSubCategory
module.exports.updateForumSubCategory = async (req, res) => {
  try {
    const idSchema = z.object({ id: z.string().uuid() });
    const idValidation = idSchema.safeParse(req.params);
    if (!idValidation.success) {
      return res.status(400).json({ error: idValidation.error.errors });
    }

    const bodyValidation = updateForumSubCategorySchema.safeParse(req.body);
    if (!bodyValidation.success) {
      return res.status(400).json({ error: bodyValidation.error.errors });
    }

    const { id } = idValidation.data;
    const { mainCategoryId, ...data } = bodyValidation.data;

    // Verify sub-category exists
    const category = await prisma.forumSubCategory.findUnique({
      where: { id },
    });
    if (!category) {
      return res.status(404).json({ error: 'Sub-category not found' });
    }

    // Verify main category exists if provided
    if (mainCategoryId) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: mainCategoryId },
      });
      if (!mainCategory) {
        return res.status(404).json({ error: 'Main category not found' });
      }
      data.mainCategoryId = mainCategoryId;
    }

    const updatedCategory = await prisma.forumSubCategory.update({
      where: { id },
      data,
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error('Error updating ForumSubCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a ForumSubCategory by ID
module.exports.getForumSubCategoryById = async (req, res) => {
  try {
    const idSchema = z.object({ id: z.string().uuid() });
    const validationResult = idSchema.safeParse(req.params);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    const { id } = validationResult.data;
    const includePosts = req.query.includePosts === 'true';

    const category = await prisma.forumSubCategory.findUnique({
      where: { id },
      include: {
        mainCategory: true,
        quotePost: includePosts,
        generalPost: includePosts,
      },
    });

    if (!category) {
      return res.status(404).json({ error: 'Sub-category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching ForumSubCategory by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all ForumSubCategories
module.exports.getAllForumSubCategories = async (req, res) => {
  try {
    const categories = await prisma.forumSubCategory.findMany({
      include: { mainCategory: true },
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching all ForumSubCategories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
