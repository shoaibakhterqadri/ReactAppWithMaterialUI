import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';

function ListaComponent() {
    const arrayFruitName=['apple','mango','orange']
  return (
    <>
    <List sx={{maxWidth:"250px",backgroundColor:"yellow",color:"red"}} >
        
        {arrayFruitName.map(fruit=>{return  <>
        <ListItemButton>{">"}<ListItemText primary={fruit}/></ListItemButton>
        </> } )}
        
    </List>
    </>
  )
}

export default ListaComponent