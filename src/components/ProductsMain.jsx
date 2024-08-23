import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateProductDialog from './CreateProductDialog ';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const labels = {
  0.5: "Useless+",
  1: "Useless",
  1.5: "Poor+",
  2: "Poor",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const ProductsMain = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState({
    imgSrc: '',
    name: '',
    category: '',
    price: '', 
    rating: 0,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const queryClient = useQueryClient();

  // Fetch products data
  const { data, isLoading, isError } = useQuery('products', () =>
    axios.get("http://localhost:5000/products").then(res => res.data.data)
  );

  // Mutation for deleting a product
  const deleteProduct = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:5000/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      setSnackbar({
        open: true,
        message: "Product deleted successfully!",
        severity: "success",
      });
      handleEditDialogClose();
    },
    onError: () => {
      setSnackbar({
        open: true,
        message: "Failed to delete product.",
        severity: "error",
      });
    },
  });

  // Mutation for editing a product
  const editProduct = useMutation({
    mutationFn: (product) =>
      axios.patch(`http://localhost:5000/products/${product.id}`, product),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      setSnackbar({
        open: true,
        message: "Product edited successfully!",
        severity: "success",
      });
      handleEditDialogClose();
    },
    onError: () => {
      setSnackbar({
        open: true,
        message: "Failed to edit product.",
        severity: "error",
      });
    },
  });

  // Open and close handlers for Create and Edit dialogs
  const handleCreateDialogOpen = () => setCreateDialogOpen(true);
  const handleCreateDialogClose = () => setCreateDialogOpen(false);

  const handleEditDialogOpen = (product) => {
    setProduct(product);
    setSelectedProduct(product);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setProduct({
      imgSrc: '',
      name: '',
      category: '',
      price: '', 
      rating: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    if (selectedProduct) {
      deleteProduct.mutate(selectedProduct.id);
    }
  };

  const handleEdit = () => {
    if (selectedProduct) {
      editProduct.mutate({ ...product, id: selectedProduct.id });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    <Grid sx={{ height: "100%" }}>
      <Grid sx={{ overflowY: "auto", height: "100%", scrollbarWidth: "none" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 10,
              ml: 7,
              width: 300,
              height: 450,
              ":hover": {
                cursor: 'pointer',
                background: '#e1e1e1',
                fontSize: 25,
                fontWeight: 'solid'
              }
            },
          }}
        >
          {Array.isArray(data) && data?.map((product) => (
            <Paper key={product.id} elevation={3} onClick={() => handleEditDialogOpen(product)}>
              <img
                src={product.imgSrc}
                alt={product.altText}
                style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
              />
              <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
                {product.category}
              </Typography>
              <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
                Price: ${product.price}
              </Typography>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  ml: 3,
                  mt: 2,
                }}
              >
                <Rating
                  name="text-feedback"
                  value={product.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: 2 }}>{labels[product.rating]}</Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Grid>

      {/* Floating Action Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1200 // Ensure it's above other content
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleCreateDialogOpen}>
          <AddIcon />
        </Fab>
      </Box>

      {/* Create Product Dialog */}
      <CreateProductDialog
        open={createDialogOpen}
        onClose={handleCreateDialogClose}
        onSave={() => {
          handleCreateDialogClose();
        }}
      />

      {/* Edit/Delete Dialog */}
      <Dialog
        fullScreen={fullScreen}
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edit/Delete Product"}
        </DialogTitle>
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
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="outlined" 
            value={product.price}
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
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
          <Button onClick={handleEdit} autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ProductsMain;
