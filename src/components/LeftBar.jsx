import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Home } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Groups2Icon from '@mui/icons-material/Groups2';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Products from '../Pages/Products';
import { useNavigate } from 'react-router-dom';



const LeftBar = () => {

  
  const navigate = useNavigate()

  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:5 }}
      >
        <ListItemButton  onClick={()=>navigate('/')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </ListItemButton>

        <ListItemButton onClick={()=>navigate('/products')}>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

            <ListItemButton>
          <ListItemIcon>
            <Groups2Icon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Income" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Promote" />
        </ListItemButton>
      </List>
    );
}

export default LeftBar;
