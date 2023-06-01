import { Button } from '@mui/base';
import { Alert, CircularProgress, Drawer, LinearProgress, List, ListItemButton, ListItemText, Rating, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react'

function DrawerList() {
    const [open,setOpen]=useState(false);
    const [value,setValue]=useState()
    const courses=['first','second','third','fourth']
  return (
    <>
    <Button variant="contained" onClick={()=>setOpen(true)}>Open</Button>
    <Drawer open={open} onClose={()=>setOpen(false)}>
        <List>
            {courses.map(course=>{
                <ListItemButton onClick={()=>setOpen(false)}><ListItemText primary={course}/></ListItemButton>
            })}
        </List>
    </Drawer>
    
    {/* <Snackbar open={open} message="This is Snackbar"></Snackbar> */}
    <Snackbar open={open} autoHideDuration={2000}><Alert severity='primary'>Alert is a built function</Alert></Snackbar>

<CircularProgress color='primary' variant='determinate' value={50}></CircularProgress>
<LinearProgress></LinearProgress>
<Rating size='large' value={value} precision={0.2} onChange={(e,val)=>setValue(val)}></Rating>
<Typography>Stars Rated is {value!==undefined ?value:0}</Typography>
    </>
  )
}

export default DrawerList