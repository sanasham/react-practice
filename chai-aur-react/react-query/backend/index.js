import express from "express";
//import { config } from "dotenv";
//import path from "path";

const app = express();
//config({ path: path.join(__dirname, ".env") });

const PORT = process.env.PORT || "8000";

app.use("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      inStock: 20,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 499.99,
      category: "Electronics",
      inStock: 30,
    },
    {
      id: 3,
      name: "Headphones",
      price: 79.99,
      category: "Electronics",
      inStock: 50,
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 89.99,
      category: "Fashion",
      inStock: 40,
    },
    {
      id: 5,
      name: "Backpack",
      price: 49.99,
      category: "Fashion",
      inStock: 25,
    },
  ];
  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    console.log(filteredProducts);
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
