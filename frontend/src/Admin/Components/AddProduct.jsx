import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASE_URL } from "../../Helper/APIConfig";
import { MdOutlineCancel, MdProductionQuantityLimits } from "react-icons/md";

const AddProduct = () => {
  const [categoryList, setcategoryList] = useState([]);
  const [size, setSize] = useState([
    "small",
    "medium",
    "large",
    "X-large",
    "Jumbo",
  ]);

  const [open, setOpen] = useState(false);

  let authToken = localStorage.getItem("Authorization");
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    stock: "",
    category: "",
    thumbnail: "",
    images: [],
  });

  const handleOnchange = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !productInfo.title ||
        !productInfo.description ||
        !productInfo.price ||
        !productInfo.rating ||
        !productInfo.stock ||
        !productInfo.category ||
        !productInfo.thumbnail
      ) {
        // toast.error("Please fill all the fields", {
        //   autoClose: 500,
        //   theme: "colored",
        // });
        console.log("error")
      } else if (productInfo.rating < 0 || productInfo.rating > 5) {
        toast.error("Please add a valid rating", {
          autoClose: 500,
          theme: "colored",
        });
      } else {
        const { data } = await axios.post(
          `${BASE_URL}api/products/create`,
          {
            title: productInfo.title,
            description: productInfo.description,
            price: productInfo.price,
            rating: productInfo.rating,
            stock: productInfo.stock,
            category: productInfo.category,
            thumbnail: productInfo.thumbnail,
            images: productInfo.images,
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
        setOpen(false);
        if (data === true) {
          getProductInfo();
          toast.success("Product added successfully", {
            autoClose: 500,
            theme: "colored",
          });
          setProductInfo({
            title: "",
            description: "",
            price: "",
            rating: "",
            stock: "",
            category: "",
            thumbnail: "",
            images: [],
          });
        } else {
          toast.error("Something went wrong", {
            autoClose: 500,
            theme: "colored",
          });
        }
      }
    } catch (error) {
      toast.error(error.response.data.error, {
        autoClose: 500,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    getcategoriesList();
  }, []);

  const getcategoriesList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}api/category/read`);
      setcategoryList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          color="#1976d2"
          fontWeight="bold"
        >
          Add new product{" "}
        </Typography>
        <Button
          variant="contained"
          endIcon={<MdProductionQuantityLimits />}
          onClick={handleClickOpen}
        >
          Add
        </Button>
      </Box>
      <Divider sx={{ mb: 5 }} />
      <Dialog open={open} onClose={handleClose} keepMounted>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", color: "#1976d2" }}
        >
          Add new product
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    name="title"
                    value={productInfo.title}
                    onChange={handleOnchange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      id="demo-simple-select"
                      value={productInfo.description}
                      label="Product Description"
                      name="description"
                      onChange={handleOnchange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Price"
                    name="price"
                    value={productInfo.price}
                    onChange={handleOnchange}
                    variant="outlined"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal">
                  <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="category"
                      name="category"
                      value={productInfo.category}
                      onChange={handleOnchange}
                      variant="outlined"
                    >
                      {categoryList.map((category) => (
                        <MenuItem key={category.id} value={category.category}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {productInfo.category === "books" && (
                  <Grid item xs={12}>
                    <TextField
                      label="Author"
                      name="author"
                      value={productInfo.author}
                      onChange={handleOnchange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                )}
                {productInfo.category === "shoe" && (
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                      <Select
                        value={productInfo.brand}
                        label="brand"
                        name="brand"
                        required
                        onChange={handleOnchange}
                      >
                        {categoryList.map((item) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {productInfo.category === "cloths" && (
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                      <Select
                        value={productInfo.size}
                        label="size"
                        name="size"
                        required
                        onChange={handleOnchange}
                      >
                        {size.map((item) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {productInfo.category === "mencloths" && (
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                      <Select
                        value={productInfo.size}
                        label="size"
                        name="size"
                        required
                        onChange={handleOnchange}
                      >
                        {size.map((item) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {productInfo.category === "electronics" && (
                  <Grid item xs={12}>
                    <TextField
                      value={productInfo.warranty}
                      label="Warranty"
                      name="warranty"
                      required
                      onChange={handleOnchange}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TextField
                    label="Ratings"
                    name="rating"
                    value={productInfo.rating}
                    onChange={handleOnchange}
                    variant="outlined"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Stock"
                    name="stock"
                    value={productInfo.stock}
                    onChange={handleOnchange}
                    variant="outlined"
                    inputMode="numeric"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sx={{ margin: "10px auto" }}>
                  <TextField
                    value={productInfo.thumbnail}
                    onChange={handleOnchange}
                    label="Thumbnail"
                    type="file"
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="thumbnail"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sx={{ margin: "10px auto" }}>
                  <TextField
                    value={productInfo.img}
                    onChange={handleOnchange}
                    label="Images"
                    type="file"
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="images"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  type="reset"
                  color="error"
                  onClick={handleClose}
                  endIcon={<MdOutlineCancel />}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<MdProductionQuantityLimits />}
                >
                  Add
                </Button>
              </DialogActions>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProduct;
