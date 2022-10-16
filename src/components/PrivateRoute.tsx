import { useAuth } from "@/context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface PrivateRouteProps {}

const PrivateRoute = (Component: any) => {
  const Auth = (props: PrivateRouteProps) => {
    const { authToken } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
      if (authToken) {
        setLoading(false);
      } else {
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authToken]);

    if (loading) {
      return null;
    } else {
      return <Component {...props} />;
    }
  };

  return Auth;
};

export default PrivateRoute;
