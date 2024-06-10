import { createContext, useContext, useState } from "react";

let customContext = createContext();

export const Context = ({ children }) => {
  let [searchPopupState, setSearchPopupState] = useState(false);

  const contextValue = { searchPopupState, setSearchPopupState };

  return (
    <customContext.Provider value={contextValue}>
      {children}
    </customContext.Provider>
  );
};

export const UseCustomContext = () => useContext(customContext);
