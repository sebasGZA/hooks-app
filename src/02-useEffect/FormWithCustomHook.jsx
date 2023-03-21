import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { 
    username, 
    email, 
    password, 
    onInputChange, 
    onResetForm, 
} = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div>Form with custom Hook</div>
      <hr />

      <form>
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

        <input
          type="password"
          className="form-control mt-2"
          placeholder="password"
          name="password"
          value={password}
          onChange={onInputChange}
          autoComplete="false"
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>
          Reset
        </button>
      </form>
    </>
  );
};
