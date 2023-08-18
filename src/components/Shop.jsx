import React from "react";
import ShopList from "./ShopList";

const Shop = ({ data }) => {
  return (
    <div>
      <div className="inner">
        <ShopList data={data} />
      </div>
    </div>
  );
};

export default Shop;
