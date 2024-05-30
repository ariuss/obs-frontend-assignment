import { render, screen } from "@testing-library/react";
import EditDialog from "./EditDialog";

describe("EditDialog component", () => {
  it("renders EditDialog component", () => {
    render(<EditDialog open={true} />);
    const editDialogElement = screen.getByTestId("edit-dialog");
    expect(editDialogElement).toBeInTheDocument();
  });
});
