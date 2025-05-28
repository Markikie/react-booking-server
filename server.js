const express = require("express");
const cors = require("cors");
const app = express();

const campingRoutes = require("./routes/camping");

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// app.get("/", (req, res) => {
//   console.log("hello backend");
//   res.json("hello backend");
// });

app.use("/api", campingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
