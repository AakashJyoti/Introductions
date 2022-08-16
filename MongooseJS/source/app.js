const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("connection successfull..."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: String,
  videos: Number,
  author: String,
  email: {
    type: "String",
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("example of error");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const gabru = new mongoose.model("gabru", playlistSchema);

// create Document

const createDocument = async () => {
  try {
    const abba = new gabru({
      name: "boats",
      videos: 19,
      author: "rusta",
      email: "ababaka@gmail.com",
      active: true,
    });
    // const dabba = new gabru({
    //   name: "beats",
    //   videos: 15,
    //   author: "busta",
    //   active: true,
    // });
    // const gangGang = new gabru({
    //   name: "betYourBeat",
    //   videos: 15,
    //   author: "snoop",
    //   active: true,
    // });

    const result = await abba.save();
    console.log(result);
  } catch (error) {
    console.log(" bhai bhasad ho gai....");
  }
};

createDocument();

// getDocument();

const getDocument = async () => {
  try {
    const res = await gabru.find().sort("videos : 1");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// updateDocument("61b87cbc502d997d44b9179f");


const updateDocument = async (_id) => {
  try {
    const result = await gabru.updateOne(
      { _id },
      {
        $set: {
          name: "100Bars",
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// deleteDocument("61b880de715e627cfd6eff62");

const deleteDocument = async (_id) => {
  try {
    const uttar = await gabru.deleteOne({ _id });
    console.log(uttar);
  } catch (error) {
    console.log(error);
  }
};
