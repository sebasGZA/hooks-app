import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const user = {
    id: 123,
    name: "Sebas",
    email: "test@test.com",
  };
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
