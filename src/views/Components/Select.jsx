import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectField = ({ label, width, menuItem }) => {
  const [age, setAge] = React.useState("");

  const handlesChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        margin: "0 15px",
        width: width,
        color: "#faf9f9",
      }}
    >
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#faf9f9" }} id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          sx={{ color: "#faf9f9" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handlesChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
