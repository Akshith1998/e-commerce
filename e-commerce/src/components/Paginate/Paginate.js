import "./Paginate.scss";

const Paginate = ({
  ProductsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginate">
      {pageNumbers.map((number) => {
        return (
          <span onClick={() => paginate(number)} className="page-link">
            {number}
          </span>
        );
      })}
    </div>
  );
};

export default Paginate;
