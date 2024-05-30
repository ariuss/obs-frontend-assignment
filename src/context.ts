import { createContext, useContext } from "react";
import { User } from "./types";

export const UsersContext = createContext<User[] | undefined>(undefined);

export function useUsersContect() {
  const users = useContext(UsersContext);

  if (users === undefined) {
    throw new Error("useUsersContext must be used with a UsersContext");
  }

  return users;
}
