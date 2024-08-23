import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useMutation } from 'react-query';
import { Snackbar, Alert, Container, useTheme } from '@mui/material';
import { useQueryClient } from 'react-query';




const CreateProductDialog = ({ open, onClose }) => {


  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const theme = useTheme();

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const [product, setProduct] = useState({
    imgSrc: '',
    name: '',
    category: '',
    price: '',
    quantity:0, // Updated field name
    rating: 0,
  });

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const createProducts = useMutation({
    mutationFn: (product) => axios.post("http://localhost:5000/products", product),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      setSnackbar({
        open: true,
        message: "Product created successfully!",
        severity: "success",
      });
    },
    onError: () => {
      setSnackbar({
        open: true,
        message: "Failed to create product.",
        severity: "error",
      });
    },
  });

  

  const handleSubmit = () => createProducts.mutate(product, onClose());

  return (
    <Container maxWidth="md" sx={{ pt: 0 }}>
      <Dialog open={open} onClose={onClose} sx={{ width: 550, ml: 90 }}>
        <DialogTitle>Create New Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="imgSrc"
            label="Image URL"
            type="text"
            fullWidth
            variant="outlined" 
            value={product.imgSrc}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="name"
            label="Product Name"
            type="text"
            fullWidth
            variant="outlined" 
            value={product.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            variant="outlined" 
            value={product.category}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="price" // Correct field name
            label="Price"
            type="number"
            fullWidth
            variant="outlined" 
            value={product.price} // Correct field name
            onChange={handleChange}
          />
                    <TextField
            margin="dense"
            name="quantity" // Correct field name
            label="Quantity"
            type="number"
            fullWidth
            variant="outlined" 
            value={product.quantity} // Correct field name
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="rating"
            label="Rating"
            type="number"
            fullWidth
            variant="outlined" 
            value={product.rating}
            onChange={handleChange}
            inputProps={{ min: 0, max: 5, step: 0.5 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="button">Save</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreateProductDialog;
