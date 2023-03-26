import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  // const user = {
  //   id: 123,
  //   name: "Sebas",
  //   email: "test@test.com",
  // };

  const [user, setUser] = useState();

  const loginUser = (value) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, loginUser }}>{children}</UserContext.Provider>
  );
};
