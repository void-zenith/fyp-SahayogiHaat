import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import BrowseFundraiserroutes from "../../Browsefundraiserroutes";
const RadioGroupField = () => {
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ color: "#faf3f3" }}
      >
        Cause Supported
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ color: "#faf3f3" }}
      >
        <FormControlLabel
          value="female"
          control={
            <Radio
              sx={{
                color: "#faf3f3",
                "&.Mui-checked": {
                  color: "#faf3f3",
                },
              }}
            />
          }
          label="Female"
        />
        {BrowseFundraiserroutes.map((value, id) => (
          <FormControlLabel
            value={value.title}
            key={id}
            control={
              <Radio
                sx={{
                  color: "#faf3f3",
                  "&.Mui-checked": {
                    color: "#faf3f3",
                  },
                }}
              />
            }
            label={value.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;
