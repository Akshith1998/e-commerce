import { useEffect, useState } from "react";
import "./ProductPage.scss";
import Paginate from "../Paginate/Paginate";
import Product from "../Product/Product";

const ProductPage = () => {
  const [dark, setDark] = useState(false);
  const [products, setProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setAllproducts(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlecategory = (e) => {
    const selectedProducts = allproducts.filter(
      (item) => item.category === e.target.value
    );
    setProducts(selectedProducts);
  };

  const handlehover = (val) => {
    setDark(val);
  };

  if (dark) {
    document.body.style = "opacity:0.7";
  } else {
    document.body.style = "background: white;";
  }

  return (
    <div className="container">
      <h1>Available Products</h1>
      <div className="category">
        <select onChange={(e) => handlecategory(e)}>
          <option>men's clothing</option>
          <option>jewelery</option>
          <option>electronics</option>
          <option>women's clothing</option>
        </select>
      </div>
      <div className="products">
        {currentProducts.map((item) => {
          return <Product item={item} handlehover={handlehover} />;
        })}
      </div>
      <Paginate
        ProductsPerPage={ProductsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductPage;
