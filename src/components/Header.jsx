import React from "react";
import Gnb from "./Gnb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/tarrot_for_test/">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            alt=""
            style={{
              display: "block",
              width: "150px",
              margin: "auto",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Link>
        <Gnb />
      </div>
    </header>
  );
};

export default Header;
