import React, { useState } from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';

function Cards() {
  const [open,setOpen]=useState(false);

  const deleteContent=()=>{
    setOpen(true);
  }
  return (
    <>
    <Card sx={{maxWidth:350}}>
        <CardMedia component={'img'} height={"200"} image='https://i.ytimg.com/vi/R8yrf7QU_E4/maxresdefault.jpg' alt='Shoaib Akhter Image'></CardMedia>
        <CardContent>
            <Typography gutterBottom variant='h5' component={"div"}>Web Designer</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium cupiditate maxime neque accusantium id asperiores, sit consectetur eum architecto consequuntur reiciendis atque? Deleniti sequi eligendi repellat, esse quis ratione!</Typography>
        </CardContent>
        <CardActions size='small' color='primary'>
          <Button>Share</Button>
           <Button onClick={deleteContent}>Delete</Button>
        </CardActions>
    </Card>

    <Dialog open={open} onClose={()=>setOpen(false)}>
      <DialogTitle>Are You Sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
        Are you sure you want to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpen(false)}>Cancel</Button>
        <Button>Delete</Button>
      </DialogActions>
    </Dialog>

    </>
  )
}

export default Cards