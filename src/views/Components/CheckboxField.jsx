import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CheckboxField = ({ label }) => {
  return (
    <FormControlLabel
      value="top"
      sx={{ color: "#faf9f9" }}
      control={
        <Checkbox
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
