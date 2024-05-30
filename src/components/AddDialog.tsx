import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { visuallyHidden } from "@mui/utils";
import { useUsersStore } from "../store";

const getRandomId = () => {
  let id: number = 0;

  // Prevent getting id that is less 10 which already taken by dummy users.
  while (id < 10) {
    id = Math.floor(Math.random() * 100);
  }

  return id;
};

export interface AddDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AddDialog({ open = false, onClose, onConfirm, onCancel }: AddDialogProps) {
  const { addUser } = useUsersStore();

  const [name, setName] = useState<string>("");
  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState<string>("");
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [phone, setPhone] = useState<string>("");
  const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const [website, setWebsite] = useState<string>("");
  const onWebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };
  return (
    <>
      <Dialog
        data-testid="add-dialog"
        open={open}
        onClose={onClose}
        aria-labelledby="add-dialog-title"
        aria-describedby="add-dialog-description"
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newUser = {
              id: getRandomId(),
              name: name,
              username: name.toLowerCase().replaceAll(" ", "_"),
              email: email,
              phone: phone,
              website: website,
            };
            addUser(newUser);
            onConfirm();
          },
        }}
      >
        <DialogTitle id="add-dialog-title">New User</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="add-dialog-description" sx={visuallyHidden}>
            Please fill the following fields to create a new user.
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
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
