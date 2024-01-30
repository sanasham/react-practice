import React, { useEffect, useState } from "react";

function Dropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState("");

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>test</div>;
}

export default Dropdown;
