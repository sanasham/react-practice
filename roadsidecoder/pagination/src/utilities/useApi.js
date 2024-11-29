import { useState, useEffect } from "react";

const useApi = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const res = await fetch(url);
        const result = await res.json();
        setData(result.products); // Cache the data
        setIsLoading(true);
      } catch (err) {
        console.error("Error occurred while fetching data:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [isLoading, data];
};

export default useApi;
