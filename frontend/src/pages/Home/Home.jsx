import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../../components/ProductList";
import { Row, Container, Col } from "react-bootstrap";

const HomePage = () => {
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
    <>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col key={item._id}>
              <ProductList
                title={item.title}
                description={item.description}
                price={item.price}
                images={item.images}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
