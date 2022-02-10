import { UnAuthenticated } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUser) => {
  if (requestUser.userId === resourceUser.toString()) {
    return;
  }
  throw new UnAuthenticated("Not Authorized to access this route");
};

export default checkPermissions;
