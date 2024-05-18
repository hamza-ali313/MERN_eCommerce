import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}create`, product, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Reset form data after submission
    setFormData({
      title: "",
      description: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "",
      images: "",
    });
  };

  return (
    <Container className="upload-form">
      <h2>Upload Product</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={6}>
            <Form.Group className="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group className="discountPercentage">
              <Form.Label>Discount Percentage</Form.Label>
              <Form.Control
                type="text"
                name="discountPercentage"
                placeholder="Enter discount percentage"
                value={formData.discountPercentage}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                name="rating"
                placeholder="Enter rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group className="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                name="stock"
                placeholder="Enter stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                placeholder="Enter brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group className="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="thumbnail">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="text"
                name="thumbnail"
                placeholder="Enter thumbnail URL"
                value={formData.thumbnail}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Group className="images-upload">
              <Form.Label>Images</Form.Label>
              <div>
                <Form.Control
                  type="file"
                  name="images"
                  onChange={handleChange}
                />
                <i class="fas fa-cloud-upload"></i>
              </div>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Enter description"
                style={{ height: "100px" }}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ProductUploadForm;
