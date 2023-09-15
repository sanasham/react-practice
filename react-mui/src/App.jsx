import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
const initialState = {
  homeValue: 3000,
  downPayment: 3000 * 0.2,
  loanAmount: 3000 * 0.8,
  loanTerm: 5,
  interestRate:5
};

function App() {
  const [data, setData] = useState(initialState);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xm={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xm={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
