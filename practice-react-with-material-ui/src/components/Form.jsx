import { React, useState } from "react";
import { TextField, Button, FormControl, InputLabel,Select,MenuItem, Checkbox, FormControlLabel, FormGroup, FormLabel, RadioGroup,Radio } from "@mui/material";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses:"",
    terms:true,
    gender:""
  });

  const handleChange = (e) => {
    setInputs((previousValue) => ({
      ...previousValue,
      [e.target.name]: [e.target.value],
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <TextField
          name="name"
          type="text"
          variant="outlined"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter Name"
          sx={{ margin: "20px" }}
        ></TextField>{" "}
        <br />
        <TextField
          name="email"
          type="email"
          variant="outlined"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter Email"
          sx={{ margin: "20px" }}
        ></TextField>{" "}
        <br />
        <TextField
          name="password"
          type="password"
          variant="outlined"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter Password"
          sx={{ margin: "20px" }}
        ></TextField>
        <br />
        <FormGroup>
          <FormControlLabel label="I Agree T&C" 
          control={<Checkbox defaultChecked 
          onChange={()=>
          setInputs((prevState)=>
          ({...prevState,terms:!inputs.terms}))}
          /> }></FormControlLabel>
        </FormGroup>
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" defaultValue={'male'} onChange={handleChange}>
          <FormControlLabel  value={'male'} label="Male" control={<Radio />}></FormControlLabel>
          <FormControlLabel  value={'female'} label="Femalle" control={<Radio />}></FormControlLabel>
          <FormControlLabel  value={'other'} label="Others" control={<Radio />}></FormControlLabel>
          </RadioGroup>
        </FormControl>
        <br />

         <FormControl fullWidth>
          <InputLabel id="menu">Courses</InputLabel>
          <Select name="courses" label="courses" value={inputs.courses} onChange={handleChange}>
           <MenuItem value={"mongodb"}>Mongodb</MenuItem>
           <MenuItem value={"react"}>React</MenuItem>
           <MenuItem value={"node"}>Node</MenuItem>
           <MenuItem value={"express"}>Express</MenuItem>
          </Select>
         </FormControl>

        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
