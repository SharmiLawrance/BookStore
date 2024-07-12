import React from "react";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const SingleBookCard = ({ book }) => {

  return (
    <div
      className="card-container"
    >
      <div>
        <img src={book.imageSource} alt="" className="book-img" />
      </div>

      <div className="text-container">
        <h1 className="book-name">{book.title}</h1>

        <h3 className="author-name">
          {" "}
          <MdPerson className="icon" />
          {book.author}
        </h3>
        <p className="year">
          <FaRegCalendarAlt className="year-icon" />
          {book.publishedYear}
        </p>
        <div className="icon-container">
          <Link to={`/books/details/${book._id}`}>
            <BsFillInfoCircleFill className="bottom-icons" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <FaEdit className="bottom-icons" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdDelete className="bottom-icons" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBookCard;
