import { fireEvent, render, screen } from "@testing-library/react";

import { UserContext } from "../../10-useContext/context/UserContext";
import { LoginPage } from "../../10-useContext/LoginPage";

describe("Test in <LoginPage />", () => {
  const user = { id: 1, name: "Sebas" };

  test("should make match with snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test("Should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Should show the component with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
  });

  test("Should set user when the button is clicked", () => {
    const loginUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, loginUser: loginUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonTag = screen.getByRole("button");
    fireEvent.click(buttonTag);

    expect(loginUserMock).toHaveBeenCalled();
    expect(loginUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Sebas",
      email: "test@test.com",
    });
  });
});
