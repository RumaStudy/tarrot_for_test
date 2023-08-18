import React from "react";
import "./css/main.css";
import "./css/ShopList.css";
import ItemCard from "./ItemCard";

import { useState } from "react";

const ShopList = ({ data }) => {
  const [category, setCategory] = useState(null);
  const [activeClass, setActiveClass] = useState(["active", "", "", ""]);
  const catConfirm = data.filter((item) =>
    category === null ? item.category : item.category === category
  );
  return (
    <article className="ShopList">
      <aside className="ListAside">
        <ul>
          <li
            className={activeClass[0]}
            onClick={() => {
              setCategory(null);
              setActiveClass(["active", "", "", ""]);
            }}
          >
            All
          </li>
          <li
            className={activeClass[1]}
            onClick={() => {
              setCategory("card");
              setActiveClass(["", "active", "", ""]);
            }}
          >
            Tarrot
          </li>
          <li
            className={activeClass[2]}
            onClick={() => {
              setCategory("book");
              setActiveClass(["", "", "active", ""]);
            }}
          >
            Books
          </li>
          <li
            className={activeClass[3]}
            onClick={() => {
              setCategory("stone");
              setActiveClass(["", "", "", "active"]);
            }}
          >
            Stone
          </li>
        </ul>
      </aside>
      <section className="ShopWrap">
        {catConfirm.map((item) => (
          <ItemCard data={item} />
        ))}
      </section>
    </article>
  );
};

export default ShopList;
