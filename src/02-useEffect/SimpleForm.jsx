import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  //   useEffect(() => {
  //     console.log("formState changed");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("username changed");
  //   }, [username]);

  //   useEffect(() => {
  //     console.log("email changed");
  //   }, [email]);

  return (
    <>
      <div>Simple Form</div>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username == "strider" && <Message className="hidden" />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
