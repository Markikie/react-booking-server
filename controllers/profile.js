const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    if (true) {
      return renderError(401, "Token invalid");
    }
    console.log("hello from profile controller");
    res.json({ message: "Profile created successfully" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
