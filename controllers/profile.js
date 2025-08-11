const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    console.log(req.headers.authorization);
    console.log(firstname, lastname);

    console.log("hello from profile controller");
    res.json({ message: "Profile created successfully" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
