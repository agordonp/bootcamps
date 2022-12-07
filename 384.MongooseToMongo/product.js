const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("CONECTION OPEN!!");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "price must be positive!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

// productSchema.methods.greet = function () {
//   console.log(`Hello from ${this.name}`);
// };

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  // await foundProduct.toggleOnSale();
  await foundProduct.addCategory("Outdoors");
};

Product.fireSale().then((res) => console.log(res));

findProduct();

// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 28.5,
//   categories: ["Cycling"],
//   size: "M",
// });

// bike

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: 19.99 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("IT WORKED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO, ERROR!!");
//     console.log(err);
//   });
