import { StatusCodes } from "http-status-codes";

const errorhandlerMW = (err, req, res, next) => {
  // console.log(err);
  const defaultError = {
    statusCodes: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong. Pls try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCodes = StatusCodes.BAD_REQUEST;
    // defaultError.msg = err.message;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCodes = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(
      err.keyValue
    )} already exist, please use another unique email address`;
  }

  // res.status(defaultError.statusCodes).json({ msg: err });
  res.status(defaultError.statusCodes).json({ msg: defaultError.msg });
};

export default errorhandlerMW;
