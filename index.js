// express
const express = require("express");
const productRouter = require("./routes/product"); 
const server = express();
const cors = require("cors");

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://ajay:DM3DS76tzk3Xuzs@ajay.mmihhda.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority"
  );
  console.log("Database is connected");
}
// cors origin to communicate with frontend and backend server

server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

server.use("/", productRouter.Router); 

server.use(express.static("build"));
server.use("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
server.listen(8080, () => {
  console.log("Server is started");
});
