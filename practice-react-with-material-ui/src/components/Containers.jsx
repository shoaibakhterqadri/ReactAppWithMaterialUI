import React from 'react'
import { Container, Typography } from '@mui/material'

function Containers() {
  return (
    <div>
        <Container sx={{backgroundColor:"blue"}} maxWidth='xs'>
         <Typography variant='body1'>
            This is Extra small</Typography>
        </Container> <br />
        <Container sx={{backgroundColor:"yellow"}} maxWidth='sm'>
         <Typography variant='body1'>
            This is  small</Typography>
        </Container> <br />
        <Container sx={{backgroundColor:"blue"}} maxWidth='md'>
         <Typography variant='body1'>
            This is Medium</Typography>
        </Container> <br />
        <Container sx={{backgroundColor:"blue"}} maxWidth='lg'>
         <Typography variant='body1'>
            This is Large</Typography>
        </Container> <br />
        <Container sx={{backgroundColor:"blue"}} maxWidth='xl'>
         <Typography variant='body1'>
            This is Extra Large</Typography>
        </Container> <br />
    </div>
  )
}

export default Containers