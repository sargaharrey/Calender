export interface UserData {
  _id?: String;
  name?: String;
  email?: String;
  token?: String,
  is_admin?: Boolean;
}

export interface ContextType {
  authToken?: String;
  userData: UserData;
  setAuthUserData: (data: UserData) => void;
}
