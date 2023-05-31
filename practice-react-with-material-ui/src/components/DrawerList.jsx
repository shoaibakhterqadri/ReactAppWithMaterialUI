import { Button } from '@mui/base';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react'

function DrawerList() {
    const [open,setOpen]=useState(false);
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
    </>
  )
}

export default DrawerList