import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    imageSource: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    genre:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Book = mongoose.model("BookStore", bookSchema);
