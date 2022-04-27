import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CheckboxField = ({ label, checked, onchange }) => {
  console.log(onchange);
  return (
    <FormControlLabel
      value="top"
      sx={{ color: "#faf9f9" }}
      control={
        <Checkbox
          onChange={onchange}
          sx={{
            color: "#faf9f9",
            margin: "0 15px",
            "&.Mui-checked": {
              color: "#faf9f9",
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckboxField;
