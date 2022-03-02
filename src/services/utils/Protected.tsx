import { useEffect, useState, ReactElement } from "react";
import { Navigate } from "react-router-dom";
// utils
import { AuthUtils } from "./authUtils";

const Protected = (props: { children: ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(AuthUtils.isAuthenticated());
  }, []);
  
  return isAuthenticated ? props.children : <Navigate to="/login" />;
};

export default Protected;
