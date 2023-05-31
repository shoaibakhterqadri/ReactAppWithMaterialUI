import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from '@mui/material'
import React from 'react'

function Accord() {
    const courses=['math','react','next','nest']
  return (
    <>
    
    <Accordion>
        <AccordionSummary expandIcon={"^"}>
            <Typography variant='h6'>This is question of h6</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>This is paragraph</Typography>
        </AccordionDetails>
    </Accordion>

    <Autocomplete sx={{width:200}} options={courses} 
    renderInput={(params)=> <TextField {...params} label="Select a Course"/> }/>

    

    </>
  )
}

export default Accord