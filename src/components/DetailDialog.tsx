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

export interface DetailDialogProps {
  open: boolean;
  onClose: () => void;
  userId: User["id"];
}

export default function DetailDialog({ open = false, onClose, userId }: DetailDialogProps) {
  const { users } = useUsersStore();
  const user = users.find((user) => user.id === userId);

  return (
    <>
      <Dialog
        data-testid="detail-dialog"
        open={open}
        onClose={onClose}
        aria-labelledby="detail-dialog-title"
        aria-describedby="detail-dialog-description"
      >
        <DialogTitle id="detail-dialog-title">User Details</DialogTitle>
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
          <DialogContentText id="detail-dialog-description" sx={visuallyHidden}>
            The following fields are read-only to show user details.
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            value={user?.name}
            InputProps={{
              readOnly: true,
            }}
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
            value={user?.email}
            InputProps={{
              readOnly: true,
            }}
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
            value={user?.phone}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="website"
            name="website"
            label="Website"
            type="text"
            value={user?.website}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="contained" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
