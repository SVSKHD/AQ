const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const Cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

//custom error middleware for easy front end
const productionError = require("./middlewares/productionError");

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//cookies and file middleware
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//Cors
app.use(Cors());

//temp check
app.set("view engine", "ejs");

//morgan middleware
app.use(morgan("tiny"));

//import all routes here
const home = require("./routes/home");
const user = require("./routes/user");
const product = require("./routes/product");
const payment = require("./routes/payment");
const order = require("./routes/order");

//router middleware
app.use("/api/v1", home);
app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", payment);
app.use("/api/v1", order);

app.get("/signuptest", (req, res) => {
  res.render("signuptest");
});

app.get("/", (req, res) => {
  res.render("home");
});

//to handle production error
app.use(productionError);

// export app js
module.exports = app;
