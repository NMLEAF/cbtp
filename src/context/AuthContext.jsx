// Import React and the Hooks we need here
import React, { useState, useEffect, useContext } from "react";
// Import the Util function we created to handle the reading from the local storage
import getAuth from "../Utility/auth.header";
// Create a context object
const AuthContext = React.createContext();
// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setisTeacher] = useState(false);
  const [isParent, setisParent] = useState(false);
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    // Retrieve the logged in user from local storage
    fetchData();
  }, []);

  const fetchData = () => {
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      if (response.employee_token) {
        setIsLogged(true);
        // 3 is the employee_role for admin
        if (response.employee_role === "admin") {
          setIsAdmin(true);
        } else if (response.employee_role === "manager") {
          //console.log(response.employee_role);
          setisTeacher(true);
        }
        setEmployee(response);
      }
    });
  };

  const value = {
    isTeacher,
    setisTeacher,
    isLogged,
    isAdmin,
    setIsAdmin,
    setIsLogged,
    fetchData,
    isTeacher,
    setisTeacher,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
