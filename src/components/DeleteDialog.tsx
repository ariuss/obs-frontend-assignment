import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useUsersStore } from "../store";
import type { User } from "../types";

export interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  userId: User["id"];
}

export default function DeleteDialog({
  open = false,
  onConfirm,
  onCancel,
  onClose,
  userId,
}: DeleteDialogProps) {
  const { users, deleteUser } = useUsersStore();
  const deletedUsers = users.find((user) => user.id === userId);

  return (
    <>
      <Dialog
        data-testid="delete-dialog"
        open={open}
        onClose={onClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">User Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete user "{deletedUsers?.name}" from user list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} variant="outlined" autoFocus>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              deleteUser(userId);
            }}
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
