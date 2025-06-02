exports.createProfile = (req, res) => {
  try {
    console.log("hello from profile controller");
    res.json({ message: "Profile created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
