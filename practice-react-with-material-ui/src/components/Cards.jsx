import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material';

function Cards() {
  return (
    <>
    <Card sx={{maxWidth:350}}>
        <CardMedia component={'img'} height={"200"} image='https://i.ytimg.com/vi/R8yrf7QU_E4/maxresdefault.jpg' alt='Shoaib Akhter Image'></CardMedia>
        <CardContent>
            <Typography gutterBottom variant='h5' component={"div"}>Web Designer</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium cupiditate maxime neque accusantium id asperiores, sit consectetur eum architecto consequuntur reiciendis atque? Deleniti sequi eligendi repellat, esse quis ratione!</Typography>
        </CardContent>
        <CardActions size='small' color='primary'><Button>Share</Button></CardActions>
    </Card>
    </>
  )
}

export default Cards