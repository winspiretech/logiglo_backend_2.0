const prisma = require('../../models/prismaClient');
const { ApiError } = require('../../utils/ApiError');
const { ApiResponse } = require('../../utils/ApiResponse');

const getExporters = async (req, res) => {
  try {
    const { category, stateId, exporterTypeId, productId, search } = req.query;

    if (!category || !['EXPORTER', 'ORGANIC'].includes(category)) {
      throw new ApiError(400, 'Invalid or missing category');
    }

    // 🔐 Make `stateId` required
    if (!stateId) {
      throw new ApiError(400, 'State is required');
    }

    const filters = {
      category,
      stateId: parseInt(stateId, 10),
    };

    if (exporterTypeId) filters.exporterTypeId = exporterTypeId;
    if (search) {
      filters.name = {
        contains: search,
        mode: 'insensitive',
      };
    }

    let exporters;

    if (category === 'EXPORTER' && productId) {
      exporters = await prisma.exporter.findMany({
        where: {
          ...filters,
          products: {
            some: {
              id: productId,
            },
          },
        },
        include: {
          state: true,
          exporterType: true,
        },
      });
    } else {
      exporters = await prisma.exporter.findMany({
        where: filters,
        include: {
          state: true,
          exporterType: true,
        },
      });
    }

    if (!exporters || exporters.length === 0) {
      throw new ApiError(404, 'No exporters found matching the filters');
    }

    const response = exporters.map((exp) => {
      const baseData = {
        id: exp.id,
        name: exp.name,
        city: exp.city,
        state: exp.state.name,
        exporterType: exp.exporterType.name,
        pincode: exp.pincode,
        fullAddress: exp.fullAddress,
        email: exp.email,
      };

      if (category === 'ORGANIC') {
        baseData.certificationBodyName = exp.certificationBodyName || null;
      }

      return baseData;
    });

    return res
      .status(200)
      .json(new ApiResponse(200, response, 'Exporters fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message || null));
  }
};

const getExporterById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, 'Exporter ID is required');
    }

    const exporter = await prisma.exporter.findUnique({
      where: { id },
      include: {
        state: true,
        exporterType: true,
      },
    });

    if (!exporter) {
      throw new ApiError(404, 'Exporter not found');
    }

    // Similar exporters by pincode and state
    const similarExporters = await prisma.exporter.findMany({
      where: {
        id: { not: id },
        pincode: exporter.pincode,
        stateId: exporter.stateId,
      },
      take: 5,
    });

    const response = {
      id: exporter.id,
      name: exporter.name,
      fullAddress: exporter.fullAddress,
      email: exporter.email,
      city: exporter.city,
      pincode: exporter.pincode,
      state: exporter.state.name,
      exporterType: exporter.exporterType.name,
      certificationBodyName: exporter.certificationBodyName,
      similarExporters,
    };

    return res
      .status(200)
      .json(new ApiResponse(200, response, 'Exporter details fetched'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message));
  }
};

const getStates = async (req, res) => {
  try {
    const states = await prisma.statesData.findMany({
      orderBy: { name: 'asc' },
    });

    if (!states || states.length === 0) {
      throw new ApiError(404, 'No states found');
    }

    return res
      .status(200)
      .json(new ApiResponse(200, states, 'States fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message));
  }
};

const getExporterTypes = async (req, res) => {
  try {
    const types = await prisma.exporterType.findMany({
      orderBy: { name: 'asc' },
    });

    if (!types || types.length === 0) {
      throw new ApiError(404, 'No exporter types found');
    }

    return res
      .status(200)
      .json(new ApiResponse(200, types, 'Exporter types fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message));
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { name: 'asc' },
    });

    if (!products || products.length === 0) {
      throw new ApiError(404, 'No products found');
    }

    return res
      .status(200)
      .json(new ApiResponse(200, products, 'Products fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message));
  }
};

module.exports = {
  getExporters,
  getExporterById,
  getStates,
  getExporterTypes,
  getProducts,
};
