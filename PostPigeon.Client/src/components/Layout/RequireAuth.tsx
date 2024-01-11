import { PropsWithChildren } from "react";
import useLocalStorage from "../../app/hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth = ({children}: RequireAuthProps) => {
  const { storedValue } = useLocalStorage("token", "");

  return storedValue ? children : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
