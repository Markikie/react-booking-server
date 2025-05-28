const express = require("express");
const router = express.Router();

// Endpoint http://localhost:5000/api/camping
// Method: GET [read all]
// Access: Public
router.get("/camping", (req, res) => {
  res.send("Camping route is working");
});

// Endpoint http://localhost:5000/api/camping/:id
// Method: GET [read by id]
// Access: Public
router.get("/camping/:id", (req, res) => {
  res.send("Camping route is working");
});

// Endpoint http://localhost:5000/api/camping
// Method: POST
// Access: Private
router.post("/camping", (req, res) => {
  const { title, price } = req.body;
  console.log(req.body.title);
  console.log(req.body.price);
  res.send("messege from post request");
});

// Endpoint http://localhost:5000/api/camping/:id
// Method: PUT
// Access: Private

router.put("/camping/:id", (req, res) => {
  console.log(req.params.id);
  res.send("messege from put request");
});

// Endpoint http://localhost:5000/api/camping/:id
// Method: DELETE
// Access: Private

router.delete("/camping/:id", (req, res) => {
  console.log(req.params.id);
  res.send("messege from delete request");
});

module.exports = router;
