const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());

app.use(express.json());

let currentUser = {
  name: "Astr",
  age: 25,
  hairColor: "black",
  hobbies: ["swimming", "bicycle"],
};

let users = [
  {
    id: "1001",
    name: "John",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "Book reading"],
  },
  {
    id: "1002",
    name: "Smith",
    age: 34,
    hairColor: "gray",
    hobbies: ["comedy", "Book reading"],
  },
  {
    id: "1003",
    name: "Jane",
    age: 24,
    hairColor: "black",
    hobbies: ["singing", "story telling"],
  },
];

const products = [
  {
    id: "10001",
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal.",
    rating: 4.5,
  },
  {
    id: "10002",
    name: "Basketball",
    price: "$10",
    description: "Just like pros use.",
    rating: 3.8,
  },
  {
    id: "10003",
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running.",
    rating: 4.2,
  },
];

app.get("/current-user", (req, res) => {
  res.status(200).json(currentUser);
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(users.find((user) => user.id === id));
});

app.post("/user/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  users = users.map((user) => (user.id === id ? updatedUser : user));

  res.status(200).json(users.find((user) => user.id === id));
});

app.get("/user", (req, res) => {
  res.status(200).json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(products.find((product) => product.id === id));
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(PORT, () => console.log("Server is running in port 4000"));
