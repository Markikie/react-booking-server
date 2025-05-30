const e = require("express");

exports.listCamping = (req, res) => {
  try {
    console.log("controller");
    res.send("hello from camping controller");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.readCamping = (req, res) => {
  try {
    res.send("hello from read camping controller");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createCamping = (req, res) => {
  try {
    res.send("hello from create camping controller");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateCamping = (req, res) => {
  try {
    res.send("hello from update camping controller");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteCamping = (req, res) => {
  try {
    res.send("hello from delete camping controller");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
