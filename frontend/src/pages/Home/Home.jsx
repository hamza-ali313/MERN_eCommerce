import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import ham from "../../assets/Images/hammer.png";
import screw from "../../assets/Images/screw.png";
import Footer from "../../components/Footer/Footer";
import Prodcategory from "../../components/prodcategory/Prodcategory";
import bannerData from "../../Helper/Homepagecat";
const HomePage = () => {
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
            {bannerData.map((data) => (
              <Col lg={4}>
                <Prodcategory name={data.name} img={data.img} />
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
