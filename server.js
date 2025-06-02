const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const { readdirSync } = require("fs");

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan("dev")); // Middleware for logging requests

// app.get("/", (req, res) => {
//   console.log("hello backend");
//   res.json("hello backend");
// });

console.log(readdirSync("./routes"));

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
