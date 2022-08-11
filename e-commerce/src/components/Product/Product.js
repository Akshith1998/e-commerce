import { useState } from "react";
import "./Product.scss";

const Product = ({ item }) => {
  const [hover, setHover] = useState(false);
  const handlechangehover = () => {
    setHover(!hover);
  };
  return (
    <div onClick={handlechangehover} onMouseEnter={handlechangehover}>
      <div className="set">
        <img src={item.image} alt="" />
      </div>
      {hover && (
        <div className="sethover">
          <div className="hover">
            <div className="hoverHeading">
              <h4>{item.category}</h4>
              <button onClick={handlechangehover}>Close</button>
            </div>
            <div className="hoverSection">
              <img src={item.image} alt="" />
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
