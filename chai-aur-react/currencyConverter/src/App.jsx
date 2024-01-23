import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency Converter</h1>
      <InputBox
        label={from}
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={() => setAmount(amount)}
        selectCurrency={from}
      />
    </>
  );
}

export default App;
