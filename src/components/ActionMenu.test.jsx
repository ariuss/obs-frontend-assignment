import { render, screen, fireEvent } from "@testing-library/react";
import ActionMenu from "./ActionMenu";

describe("ActionMenu component", () => {
  it("renders ActionMenu component", () => {
    render(<ActionMenu userId={1} />);
    const actionMenuElement = screen.getByTestId("action-menu-1");
    expect(actionMenuElement).toBeInTheDocument();
  });

  it("show menu items when action button click", () => {
    render(<ActionMenu userId={1} />);
    const actionButtonElement = screen.getByTestId("action-button-1");
    fireEvent.click(actionButtonElement);
    const actionMenuItemsElement = screen.getByTestId("action-menu-items-1");
    expect(actionMenuItemsElement).toBeInTheDocument();
  });

  it("open detail dialog when detail menu item clicked", () => {
    render(<ActionMenu userId={1} />);
    const actionButtonElement = screen.getByTestId("action-button-1");
    fireEvent.click(actionButtonElement);
    const detailMenuItemElement = screen.getByTestId("menu-item-detail-1");
    fireEvent.click(detailMenuItemElement);
    const detailDialogElement = screen.getByTestId("detail-dialog");
    expect(detailDialogElement).toBeInTheDocument();
  });

  it("open edit dialog when edit menu item clicked", () => {
    render(<ActionMenu userId={1} />);
    const actionButtonElement = screen.getByTestId("action-button-1");
    fireEvent.click(actionButtonElement);
    const editMenuItemElement = screen.getByTestId("menu-item-edit-1");
    fireEvent.click(editMenuItemElement);
    const editDialogElement = screen.getByTestId("edit-dialog");
    expect(editDialogElement).toBeInTheDocument();
  });

  it("open delete dialog when delete menu item clicked", () => {
    render(<ActionMenu userId={1} />);
    const actionButtonElement = screen.getByTestId("action-button-1");
    fireEvent.click(actionButtonElement);
    const deleteMenuItemElement = screen.getByTestId("menu-item-delete-1");
    fireEvent.click(deleteMenuItemElement);
    const deleteDialogElement = screen.getByTestId("delete-dialog");
    expect(deleteDialogElement).toBeInTheDocument();
  });
});
