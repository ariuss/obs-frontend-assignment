import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("open add new user dialog when add user button clicked", () => {
    render(<App />);
    const addUserButtonElement = screen.getByTestId("add-user-button");
    fireEvent.click(addUserButtonElement);
    const addDialogElement = screen.getByTestId("add-dialog");
    expect(addDialogElement).toBeInTheDocument();
  });
});
