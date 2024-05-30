import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
import ProductList from "../../components/ProductList/ProductList";


const ProductCategoryPage = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/products/read"
      );
      setProductList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {/* product sec start */}
      <section className="product-sec">
        <Container>
          <Row>
            {productList.map((item) => (
              <Col key={item._id} lg={4}>
                <ProductList
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  images={item.thumbnail}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* product sec end */}
    </div>
  );
};
export default ProductCategoryPage;
