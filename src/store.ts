import { create } from "zustand";
import { User } from "./types";

export interface UsersState {
  users: User[];
  addUser: (newUser: User) => void;
  editUser: (editedUser: User | undefined) => void;
  deleteUser: (deletedUserId: User["id"]) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  editUser: (editedUser) =>
    set((state) => ({
      users: [
        ...state.users.map((user) => {
          if (user.id !== editedUser?.id) return user;

          return { ...user, ...editedUser };
        }),
      ],
    })),
  deleteUser: (deletedUserId) =>
    set((state) => ({
      users: [
        ...state.users.filter((user) => {
          return user.id !== deletedUserId;
        }),
      ],
    })),
}));

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

getUsers()
  .then((users) => useUsersStore.setState({ users }))
  .catch((error) => console.error(error));
