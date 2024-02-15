import { useState } from "react";

import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUT_STPES = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your Contact Details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your Shipping Address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete Payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your Order has been delivered</div>,
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Order summary</h1>
      <CheckoutStepper stepsConfig={CHECKOUT_STPES} />
    </>
  );
}

export default App;
