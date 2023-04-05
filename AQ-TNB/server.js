const Server = require("./index");
const connectDB = require("./config/db");
const cloudinary = require("cloudinary");

//database
connectDB();
//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;

Server.listen(PORT, () => {
  console.log(`Everything is active at ${PORT}`);
});
