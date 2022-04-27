import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SelectField = ({ label, width, onChange, gender }) => {
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
          value={gender}
          label="Age"
          onChange={onChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
