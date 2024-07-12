import React from "react";
import { HiMiniBookOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";

const destination = "/";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title">
          <Link to={destination}>
            <HiMiniBookOpen className="book-icon" />
          </Link>
          Book Store
        </h1>
      </div>
    </div>
  );
};

export default Header;
