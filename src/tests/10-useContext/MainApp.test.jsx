import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../10-useContext/MainApp";

describe("Test in <MainApp />", () => {
  test("Should make match with snapshot and show HomePage", () => {
    const { container } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Should show LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });

  test("Should show AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("AboutPage")).toBeTruthy();
  });
});
