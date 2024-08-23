import React from 'react'
import InventoryMain from '../components/InventoryMain'
import NavBar from '../components/NavBar'
import { Grid } from '@mui/material'

const Inventory = () => {
  return (
    <div>
  
<NavBar>
</NavBar>
<Grid container >
<Grid item sm={12} sx={{ background: "#ececec", height: "100vh" }}>
 <InventoryMain/>
</Grid>
</Grid>
</div>
  )
}

export default Inventory