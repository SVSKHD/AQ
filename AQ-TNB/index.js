const express = require("express");
require("dotenv").config();
const Morgan = require("morgan");
const Cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const { readdirSync } = require("fs");
const Server = express();

//server middlewares
Server.use(express.json());
Server.use(Cors());
Server.use(Morgan("dev"));

Server.use(express.urlencoded({ extended: true }));
Server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
//cookies and file middlewares
Server.use(cookieParser());
Server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);


// routes middleware
readdirSync("./routes").map((r) =>
  Server.use("/v1/api", require("./routes/" + r))
);
//crm routes
// readdirSync("./Crm/Routes").map((r) =>
//   app.use("/crm", require("./Crm/Routes/" + r))
// );



Server.set("view-engine", "ejs");

module.exports = Server;
