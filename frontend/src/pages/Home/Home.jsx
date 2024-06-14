import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import ham from "../../assets/Images/hammer.png";
import screw from "../../assets/Images/screw.png";
import Footer from "../../components/Footer/Footer";
import Prodcategory from "../../components/prodcategory/Prodcategory";
import bannerData from "../../Helper/Homepagecat";
import {BASE_URL} from '../../Helper/APIConfig.js'

const HomePage = () => {
  const [categoryList, setcategoryList] = useState([]);
  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}api/category/read`
      );
      setcategoryList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* banner sec start */}
      <section className="banner-sec">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Carousel.Caption>
              <div>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div>
                      <h1>Essential Hardware Tools</h1>
                      <p>Building Strength, One Tool at a Time</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <img src={ham} alt="" />
                  </Col>
                </Row>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div>
                      <h1>Essential Hardware Tools</h1>
                      <p>Building Strength, One Tool at a Time</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <img src={screw} alt="" />
                  </Col>
                </Row>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* banner sec end */}
      <section className="py-5 ">
        <Container>
          <Row>
            {categoryList.map((data) => (
              <Col lg={4}>
                <Prodcategory name={data.name} img={data.img} category={data.category}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* footer sec start */}
      <Footer />
      {/* footer sec end */}
    </>
  );
};

export default HomePage;
