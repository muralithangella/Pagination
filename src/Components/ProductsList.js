const ProductsList = ({ products }) => {
  return (
    <div className="products_list">
      <h1>List Of Products</h1>
      <div className="products">
        {products.map((val, index) => {
          return (
            <div className="products_iterate" key={index}>
              <img
                src={val.images}
                alt=""
                style={{ width: "500px", height: "400px" }}
              />
              <div>{val.brand}</div>
              <div>{val.category}</div>
              <div>{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
