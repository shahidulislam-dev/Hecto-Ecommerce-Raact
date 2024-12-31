import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const apiData = createContext();

const ContextApi = ({ children }) => {

  let [apiInfo, setApiInfo] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=60')
    .then((response) => setApiInfo(response.data.products));
  }, [])
  return (
    <>
      <apiData.Provider value={apiInfo}>{children}</apiData.Provider>
    </>
  );
};

export { apiData, ContextApi };
