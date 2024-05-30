import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddDialog from "./components/AddDialog";
import UsersTable from "./components/UsersTable";

function App() {
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Users
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: "4rem", padding: "2rem" }}>
        <UsersTable />
      </Container>
      <Fab
        data-testid="add-user-button"
        id="add-user-button"
        color="primary"
        aria-label="Add new user"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={() => setOpenAddDialog(true)}
      >
        <AddIcon />
      </Fab>
      <AddDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        onConfirm={() => setOpenAddDialog(false)}
        onCancel={() => setOpenAddDialog(false)}
      />
    </>
  );
}

export default App;
