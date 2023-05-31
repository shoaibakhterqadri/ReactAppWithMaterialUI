import { Box, Button, Link, Modal, Typography } from '@mui/material';
import React,{useState} from 'react'

function Modals() {
    const [open,setOpen]=useState(false);
  return (
    <>
    <Button onClick={()=>setOpen(true)}>Open Modal</Button>
    <Modal open={open} onClose={()=>setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
            <Typography>This is Modal</Typography>
            <Button variant='contained' onClick={()=> setOpen(false)}>Cancel</Button>
        </Box>
    </Modal>

    <Link variant='h4' underline='hover' href='https://codingshub.com'>Codings Hub</Link>
    </>
  )
}

export default Modals