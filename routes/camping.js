const express = require("express");
const router = express.Router();
const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  deleteCamping,
} = require("../controllers/camping");

// Endpoint http://localhost:5000/api/camping
// Method: GET [read all]
// Access: Public
router.get("/camping", listCamping);

// Endpoint http://localhost:5000/api/camping/:id
// Method: GET [read by id]
// Access: Public
router.get("/camping/:id", readCamping);

// Endpoint http://localhost:5000/api/camping
// Method: POST
// Access: Private
router.post("/camping", createCamping);

// Endpoint http://localhost:5000/api/camping/:id
// Method: PUT
// Access: Private

router.put("/camping/:id", updateCamping);

// Endpoint http://localhost:5000/api/camping/:id
// Method: DELETE
// Access: Private

router.delete("/camping/:id", deleteCamping);

module.exports = router;
