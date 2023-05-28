import {Typography,Button,TextField} from "@mui/material"
import Form from "./components/Form";


function App() {
  return (
    <>
    {/* <Typography variant="h1" ml={15} sx={{color:"red"}} component={"h6"} > Shoaib Akhter</Typography> */}
    <h1>Form</h1>
    
    {/* <Button variant="contained" sx={{margin:"50px"}} disabled>First</Button>
    <Button variant="text" color="secondary">Second</Button>
    <Button variant="outlined"  size="large">Third</Button>


<TextField type="text" placeholder="name" variant="standard" sx={{margin:"20px"}}></TextField>
<TextField type="text" placeholder="name" variant="outlined" sx={{margin:"20px"}}></TextField>
<TextField type="text" placeholder="name" variant="filled" sx={{margin:"20px"}}></TextField> */}
    
    <Form />
    
    </>
  );
}

export default App;
