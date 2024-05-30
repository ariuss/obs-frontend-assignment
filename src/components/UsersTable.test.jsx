import { render, screen } from "@testing-library/react";
import UsersTable from "./UsersTable";

describe("UserTable component", () => {
  it("renders UserTable component", () => {
    render(<UsersTable />);
    const usersTableElement = screen.getByTestId("users-table");
    expect(usersTableElement).toBeInTheDocument();
  });
});
