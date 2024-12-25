import React, { createContext } from "react";
const apiData = createContext();

const ContextApi = ({ children }) => {
  return (
    <>
      <apiData.Provider value={"ami"}>{children}</apiData.Provider>
    </>
  );
};

export { apiData, ContextApi };
