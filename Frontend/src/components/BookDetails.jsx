import React from "react";


const BookDetails = ({book}) => {
  return (
    <div className="show-book-container">
      <div className="show-img-container">
        <img
          src={book.imageSource}
          alt={book.title}
          className="show-card-img"
        />
      </div>
      <div className="show-description-container">
        <h1 className="show-book-title">{book.title} ({book.publishedYear})</h1>
        <p className="author-name author-name-right">-{book.author}</p><br/>
        <div className="book-description"><p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
