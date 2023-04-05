const express = require("express")
const Router  = express.Router()

Router.route("/categories").get()
Router.route("/admin/category/add").post()



module.exports = Router