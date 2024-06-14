import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Helper/APIConfig";


const ProductCategoryPage = () => {
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}api/products/read/${category}`
      );
      setProductList(response.data);
      console.log(response.data,"data");
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
