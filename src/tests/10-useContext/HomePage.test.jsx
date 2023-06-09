import { render, screen } from "@testing-library/react";
import { HomePage } from "../../10-useContext/HomePage";
import { UserContext } from "../../10-useContext/context/UserContext";

describe("Test in <HomePage />", () => {
  const user = { id: 1, name: "Sebas" };

  test("should make match with snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test("Should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Should show the component with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
  });
});
