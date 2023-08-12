const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: true,
      message: "something went wrong while creating a row of airplanes table",
      data: {},
      error: {
        explanation: "model number not found in the incoming request body",
      },
    });
  }
  next();
}

module.exports = { validateCreateRequest };
