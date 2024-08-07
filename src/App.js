import "./styles.css";
import { useEffect, useState } from "react";
import ProductsList from "./Components/ProductsList";
import Pagination from "./Components/Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${(total / page) * 10}`)
      .then((val) => val.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }, []);

  return (
    <div className="App">
      <h1>E-Commerce App</h1>
      <div>
        <ProductsList products={products} />
        <Pagination total={total} />
      </div>
    </div>
  );
}
