import React from 'react'
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: false,
  },
];




const InventoryMain = () => {

  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get("http://localhost:5000/products"),
  });
  
  const products1 = getProducts.data?.data?.data;
  return (
    
    <Box sx={{ height: 400, width: 1800, mt:10, ml:11 }}>
      <Typography variant='h6'>Inventory</Typography>
      <DataGrid
        sx={{mt:1, background:'white'}}
        columns={columns}
        rows={products1}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default InventoryMain;
