const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONECTION OPEN!!");
  })
  .catch((err) => {
    console.log("MONGO CONECTION ERROR!!");
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ username: "itsAlexg96", age: 26 });
//   const user = await User.findOne({ username: "itsAlexg96" });
//   const tweet2 = new Tweet({
//     text: "bock bock bock mny chickens make noises",
//     likes: 165,
//   });
//   tweet2.user = user;
//   user.save();
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.findOne({}).populate("user", "username");
  console.log(t);
};

findTweet();
