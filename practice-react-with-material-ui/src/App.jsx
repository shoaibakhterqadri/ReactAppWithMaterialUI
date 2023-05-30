import {Typography,Button,TextField,AppBar,Toolbar,Tabs,Tab} from "@mui/material"
import Form from "./components/Form";
import React,{useState} from 'react'
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";



function App() {
  const [value, setValue] = useState(0);
  return (
    <>
 <AppBar>

    <Toolbar>
    <Typography variant="h4">Shoaib Akhter</Typography>
      <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)} sx={{marginLeft:"auto"}} indicatorColor="secondary">
        <Tab label="Home"/>
        <Tab label="About"/>
        <Tab label="Contact"/>
      </Tabs>
    </Toolbar>
 </AppBar>

    {/* <Typography variant="h1" ml={15} sx={{color:"red"}} component={"h6"} > Shoaib Akhter</Typography> */}
    
    {/* <Button variant="contained" sx={{margin:"50px"}} disabled>First</Button>
    <Button variant="text" color="secondary">Second</Button>
    <Button variant="outlined"  size="large">Third</Button>


<TextField type="text" placeholder="name" variant="standard" sx={{margin:"20px"}}></TextField>
<TextField type="text" placeholder="name" variant="outlined" sx={{margin:"20px"}}></TextField>
<TextField type="text" placeholder="name" variant="filled" sx={{margin:"20px"}}></TextField> */}
    
    {/* <Form /> */}

    <div style={{marginTop:"100px"}}>
      <Cards />

    </div>

    
    
    </>
  );
}

export default App;
