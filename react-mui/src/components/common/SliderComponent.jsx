import React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = (props) => {
  const { defaultValue, min, max, step, handleChange, value, label, unit, amount } = props;
  return (
    <div>
       <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={handleChange}
        value={value}
      />
       <Stack direction="row" justifyContent="space-between">
      <Typography variant="caption" color='grey.700'>{unit}{min}</Typography>
      <Typography variant="caption" color='grey.700'>{unit}{max}</Typography>
      </Stack>
    </div>
  );
};
SliderComponent.propTypes = {
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  unit: PropTypes.string,
  amount: PropTypes.number,
};

export default SliderComponent;
