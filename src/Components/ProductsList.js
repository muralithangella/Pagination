import { GiGreenPower, GiParrotHead } from "react-icons/gi";

const ProductsList = ({ products }) => {
  return (
    <div className="products_list">
      <h2 className="ProductList_heading">List Of Products</h2>
      <div className="products">
        {products.map((val, index) => {
          return (
            <div className="products_iterate" key={index}>
              <img
                src={val.images}
                alt=""
                style={{ width: "80px", height: "100px" }}
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
