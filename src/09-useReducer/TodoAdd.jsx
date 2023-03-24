import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    id: "",
    description: "",
    done: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="What do you want?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Add
      </button>
    </form>
  );
};
