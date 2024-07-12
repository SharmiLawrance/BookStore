import React from "react";
import SingleBookCard from "./SingleBookCard";
import { Link } from "react-router-dom";


const BooksCard = ({ books }) => {
  console.log(books);
  return (
    <div className="grid-container">
      {books.map((item) => (
        <SingleBookCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCard;
