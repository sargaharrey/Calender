import { ContextType } from "@/types";
import { createContext, useContext } from "react";

export const contextDefaultValues = {
  authToken: undefined,
  userData: {},
  setAuthUserData: async () => null,
};

export const Context = createContext<ContextType>(contextDefaultValues);
//
export const useAuth = () => {
  const auth = useContext(Context);
  return {
    authToken: auth.authToken,
    userData: auth.userData,
    setAuthUserData: auth.setAuthUserData,
  };
};
