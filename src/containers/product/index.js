import { useEffect, useState } from "react";
import Layout from "../../hoc/layout";

//import products from "../../services/json/products.json";
import { getProductList } from "../../services/product";

export default function Product() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let responce = await getProductList();
    if (responce.status === 200) {
      setProduct(responce.data);
    }
  };

  return (
    <Layout
      headerTitle="Reebok Store"
      headerText="Welcome to reebok store"
      activePage="product"
    >
      <h1>New Arrivals</h1>
      <div className="row">
        {products.map((product, key) => {
          return (
            <div className="col-4 mb-3">
              <div class="card">
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class=" card tille">{product.productName}</h5>
                  <p class="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <p class="card-text">{product.productDesc}</p>
                  <a href="/" class="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
