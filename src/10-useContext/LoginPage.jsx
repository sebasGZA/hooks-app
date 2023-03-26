import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, loginUser } = useContext(UserContext);

  return (
    <>
      <h2>LoginPage</h2>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          loginUser({
            id: 123,
            name: "Sebas",
            email: "test@test.com",
          })
        }
      >
        Set user
      </button>
    </>
  );
};
