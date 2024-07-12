import express from "express";
import { Book } from "../models/bookModels.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.imageSource ||
      !req.body.title ||
      !req.body.author ||
      !req.body.publishedYear ||
      !req.body.description ||
      !req.body.genre
    ) {
      return res.status(400).send({
        message:
          "Send all the required fields: title, author, publishedYear, description,genre",
      });
    }
    //getting the data through http post method
    const newBook = {
      imageSource: req.body.imageSource,
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
      description: req.body.description,
      genre: req.body.genre,
    };
    //storing the data into mongodb
    const book = await Book.create(newBook);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
//get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: error.message,
    });
  }
});

//get a particular book from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: error.message,
    });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.imageSource ||
      !req.body.title ||
      !req.body.author ||
      !req.body.publishedYear ||
      !req.body.description ||
      !req.body.genre
    ) {
      return res.status(400).send({
        message:
          "Send all the required fields: title, author , publishedYear, description,genre",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "Book Updated Successfully" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
export default router;
