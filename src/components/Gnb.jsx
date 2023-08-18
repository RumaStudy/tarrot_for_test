import React from "react";
import { Link } from "react-router-dom";

const Gnb = () => {
  const menus = ["Tarrot", "Runes", "Books", "New", "Shop", "Login"];
  return (
    <nav className="gnb">
      <div className="inner">
        <ul>
          {menus.map((item) => (
            <li>
              <Link to={"tarrot_for_test/" + item}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Gnb;
