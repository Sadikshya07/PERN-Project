import { createContext, useState } from "react";

export const SchoolContext = createContext([]);

export const SchoolContextProvider = ({ children }) => {
  const [schoolActivites, setSchoolActivites] = useState();

  return (
    <SchoolContext.Provider value={{ schoolActivites, setSchoolActivites }}>
      {children}
    </SchoolContext.Provider>
  );
};
