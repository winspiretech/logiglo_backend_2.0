const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const countriesData = async (req, res) => {
  try {
    const countriesData = await prisma.countriesData.findMany();
    // console.log(`✅ Fetched ${countriesData.length} countries`);
    if (!countriesData || countriesData.length === 0) {
      throw new ApiError(404, 'No countries data found');
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          'Countries data fetched successfully',
          countriesData,
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

const statesDataByCountryId = async (req, res) => {
  try {
    const { countryId } = req.params;
    if (!countryId) {
      throw new ApiError(400, 'Country ID is required');
    }
    const statesData = await prisma.statesData.findMany({
      where: {
        country_id: parseInt(countryId, 10),
      },
    });
    // console.log(`✅ Fetched ${statesData.length} states`);
    if (!statesData || statesData.length === 0) {
      throw new ApiError(404, 'No states data found');
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, 'States data fetched successfully', statesData),
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

const citiesDataByStateId = async (req, res) => {
  try {
    const { stateId } = req.params;
    if (!stateId) {
      throw new ApiError(400, 'State ID is required');
    }
    const citiesData = await prisma.citiesData.findMany({
      where: {
        state_id: parseInt(stateId, 10),
      },
    });
    // console.log(`✅ Fetched ${citiesData.length} cities`);
    if (!citiesData || citiesData.length === 0) {
      throw new ApiError(404, 'No cities data found');
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, 'Cities data fetched successfully', citiesData),
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

const countriesWithFlags = async (req, res) => {
  try {
    const countries = await prisma.countriesDataWithFlag.findMany();
    if (!countries || countries.length === 0) {
      throw new ApiError(404, 'No countries data found');
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          'Countries with flags fetched successfully',
          countries,
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
  countriesData,
  citiesDataByStateId,
  statesDataByCountryId,
  countriesWithFlags,
};
