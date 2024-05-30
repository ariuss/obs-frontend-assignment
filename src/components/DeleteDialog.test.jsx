import { render, screen } from "@testing-library/react";
import DeleteDialog from "./DeleteDialog";

describe("DeleteDialog component", () => {
  it("renders DeleteDialog component", () => {
    render(<DeleteDialog open={true} />);
    const deleteDialogElement = screen.getByTestId("delete-dialog");
    expect(deleteDialogElement).toBeInTheDocument();
  });
});
