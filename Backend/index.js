import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the Book Store");
});
app.use("/books", booksRoute);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("App connected to Database");

    app.listen(PORT, () => {
      console.log(`App is listening to Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
