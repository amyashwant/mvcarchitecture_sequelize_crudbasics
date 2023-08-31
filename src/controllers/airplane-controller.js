const { response } = require("express");
const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
    console.log(req.body)
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created a row of airplanes table",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: "something went wrong while creating a row of airplanes table",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
