const model = require("../models/product");
const Product = model.Product;
const userModel = require("../models/user");
const User = userModel.User;

exports.createUser = (req, res) => {
  const user = new User();
  user.firstName = "Ajay";
  user.lastName = "Kumar";
  user.age = 20;
  user.email = "ajayroy03377@gmail.com";
  user.address = {
    pincode: 110001,
    street: "Rohini",
    phone: 1234567890,
    area: {
      city: "Delhi",
      state: "Delhi",
    },
  };
  user.save();
  res.send(user);
};

// create the products

exports.createProduct = (req, res) => {
  const product = req.body;
  const item = new Product(product);
  item.save();
  res.send(product);
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().exec();
    return res.json(products)
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).exec();
  res.json(product);
};

// update the content fully or you can say replace put

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndReplace(id, req.body);
  res.json(product);
};

// now partially change the content

exports.patchProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(id, req.body);
  res.json(product);
};

// delete

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.json(product);
};
