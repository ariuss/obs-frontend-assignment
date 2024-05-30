import { render, screen } from "@testing-library/react";
import AddDialog from "./AddDialog";

describe("AddDialog component", () => {
  it("renders AddDialog component", () => {
    render(<AddDialog open={true} />);
    const addDialogElement = screen.getByTestId("add-dialog");
    expect(addDialogElement).toBeInTheDocument();
  });
});
