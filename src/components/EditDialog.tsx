import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { visuallyHidden } from "@mui/utils";
import { useUsersStore } from "../store";
import type { User } from "../types";

export interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  userId: User["id"];
}

export default function EditDialog({
  open = false,
  onClose,
  onConfirm,
  onCancel,
  userId,
}: EditDialogProps) {
  const { users, editUser } = useUsersStore();
  const editedUser = users.find((user) => user.id === userId);

  const [name, setName] = useState(editedUser?.name || "");
  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState(editedUser?.email || "");
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [phone, setPhone] = useState(editedUser?.phone || "");
  const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const [website, setWebsite] = useState(editedUser?.website || "");
  const onWebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };

  return (
    <>
      <Dialog
        data-testid="edit-dialog"
        open={open}
        onClose={onClose}
        aria-labelledby="edit-dialog-title"
        aria-describedby="edit-dialog-description"
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            editUser({
              ...editedUser,
              id: userId,
              name: name,
              username: editedUser?.username || "",
              email: email,
              phone: phone,
              website: website,
            });
            onConfirm();
          },
        }}
      >
        <DialogTitle id="edit-dialog-title">Edit User</DialogTitle>
        <DialogContent dividers>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "center", marginBottom: "1rem" }}
          >
            <Avatar
              alt="User profile picture"
              src="https://picsum.photos/100"
              sx={{ width: 100, height: 100 }}
            />
          </Stack>
          <DialogContentText id="edit-dialog-description" sx={visuallyHidden}>
            Please change the following fields to edit the user's data.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            value={name}
            onChange={onNameChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={onEmailChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="tel"
            value={phone}
            onChange={onPhoneChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="website"
            name="website"
            label="Website"
            type="text"
            value={website}
            onChange={onWebsiteChange}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
