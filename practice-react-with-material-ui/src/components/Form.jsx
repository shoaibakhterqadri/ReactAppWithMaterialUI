import { React, useState } from "react";
import { TextField, Button } from "@mui/material";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
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
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
