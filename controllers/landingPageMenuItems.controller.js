const { z } = require('zod');
const prisma = require('../models/prismaClient.js');
const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');

module.exports.getLandingPageMenuItems = async (req, res) => {
  try {
    const menuItems = await prisma.landingMenuItems.findMany({
      where: { enabled: true },
    });
    return res.json(
      new ApiResponse(200, menuItems, 'Menu items fetched successfully'),
    );
  } catch (error) {
    console.log('Error in getLandingPageMenuItems:', error.message);
    return res.json(
      new ApiError(500, 'error in getLandingPageMenuItems', error.message),
    );
  }
};
module.exports.getLandingPageMenuItemsAdmin = async (req, res) => {
  try {
    const menuItems = await prisma.landingMenuItems.findMany();
    return res.json(
      new ApiResponse(200, menuItems, 'Menu items fetched successfully'),
    );
  } catch (error) {
    console.log('Error in getLandingPageMenuItems:', error.message);
    return res.json(
      new ApiError(500, 'error in getLandingPageMenuItems', error.message),
    );
  }
};
module.exports.updateLandingPageMenuItems = async (req, res) => {
  try {
    const menuItemsSchema = z.object({
      id: z.string().uuid(),
      name: z.string().optional(),
      enabled: z.boolean().optional(),
    });
    const parsedMenuItems = menuItemsSchema.parse(req.body);
    const updatedMenuItem = await prisma.landingMenuItems.update({
      where: {
        id: parsedMenuItems.id,
      },
      data: parsedMenuItems,
    });
    return res.json(
      new ApiResponse(200, updatedMenuItem, 'Menu item updated successfully'),
    );
  } catch (error) {
    console.log('Error in updateLandingPageMenuItems:', error.message);
    return res.json(
      new ApiError(500, 'error in updateLandingPageMenuItems', error.message),
    );
  }
};
module.exports.addLandingPageMenuItems = async (req, res) => {
  try {
    const menuItemsSchema = z.object({
      name: z.string(),
      enabled: z.boolean(),
    });
    const parsedMenuItems = menuItemsSchema.parse(req.body);
    const newMenuItem = await prisma.landingMenuItems.create({
      data: parsedMenuItems,
    });
    return res.json(
      new ApiResponse(200, newMenuItem, 'Menu item added successfully'),
    );
  } catch (error) {
    console.log('error adding MenuItems', error.message);
    return res.json(
      new ApiError(500, 'error in addLandingPageMenuItems', error.message),
    );
  }
};
