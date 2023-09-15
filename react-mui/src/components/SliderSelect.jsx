import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";
import { PropTypes } from "prop-types";

const SliderSelect = ({ data, setData }) => {

  const bankLimit = 10000;
  return (
    <Stack my={0.4}>
      <SliderComponent
        min={1000}
        max={bankLimit}
        defaultValue={data.homeValue}
        step={100}
        handleChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        value={data.homeValue}
        label="Home Value"
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        min={0}
        max={bankLimit}
        defaultValue={data.downPayment}
        step={100}
        handleChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        value={data.downPayment}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={100}
        handleChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        value={data.loanAmount}
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        min={2}
        max={18}
        defaultValue={data.interestRate}
        step={0.5}
        handleChange={(e, value) => setData({ ...data, interestRate: value.toFixed(0) })}
        value={data.interestRate}
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
      />
    </Stack>
  );
};

SliderSelect.propTypes = {
  data: PropTypes.shape({
    homeValue: PropTypes.number.isRequired,
    downPayment: PropTypes.number.isRequired,
    loanAmount: PropTypes.number.isRequired,
    loanTerm: PropTypes.number.isRequired,
    interestRate: PropTypes.number.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
export default SliderSelect;
