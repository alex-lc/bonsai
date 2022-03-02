import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// utils
import { AuthUtils } from "./authUtils";

const Protected = (props: { children: any }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    const auth = AuthUtils.isAuthenticated();
    auth ? setIsAuthenticated(true) : navigate("/login");
  }, [isAuthenticated, navigate]);

  return props.children;
};

export default Protected;
