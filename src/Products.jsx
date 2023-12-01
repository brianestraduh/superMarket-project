import { useState, useEffect } from "react";
import useFetch from "./useFetch.js"
import Product from "./Product.jsx"
import Loader from "./Loader.jsx";

export default function Products() {
    const {get, loading} = useFetch("https://superm-3bd4e-default-rtdb.firebaseio.com/");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        get("products.json")
          .then((data) => {
            setProducts(data);
            console.log(data);
          })
          .catch((error) => console.log("Could not load products", error));
      }, []);

    return (
<div className="products-layout">
  <h1>Products</h1>
  <p>Take a look at our products</p>
  <div className="products-grid">
  {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product key={product.id} details={product} />
          );
        })}
  </div>
</div>

    );
  }
  