exports.authCheck = (req, res, next) => {
  try {
    console.log("hello middleware");
    if (true) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};
