import { useState } from "react";
import "./Product.scss";

const Product = ({ item, handlehover }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
        handlehover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        handlehover(false);
      }}
    >
      <div className="set">
        <img src={item.image} alt="" />
      </div>
      <div className="sethover">
        {hover && (
          <div className="hover">
            <div className="hoverHeading">
              <h4>{item.category}</h4>
              <button>Close</button>
            </div>
            <div className="hoverSection">
              <img src={item.image} alt="" />
              <p>{item.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
