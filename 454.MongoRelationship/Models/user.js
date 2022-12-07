const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONECTION OPEN!!");
  })
  .catch((err) => {
    console.log("MONGO CONECTION ERROR!!");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const newUser = async () => {
  const u = new User({
    first: "Alexis",
    last: "Gordon",
  });
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "99 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};

addAddress("638b85e3b2d64c6900e01df5");
