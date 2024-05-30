import { render, screen } from "@testing-library/react";
import DetailDialog from "./DetailDialog";

describe("DetailDialog component", () => {
  it("renders DetailDialog component", () => {
    render(<DetailDialog open={true} />);
    const detailDialogElement = screen.getByTestId("detail-dialog");
    expect(detailDialogElement).toBeInTheDocument();
  });
});
