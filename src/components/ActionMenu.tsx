import { useState, MouseEvent } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailDialog from "./DetailDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.25),
        marginBottom: theme.spacing(0.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export interface ActionMenuProps {
  userId: number;
}

export default function ActionMenu({ userId }: ActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openDetailDialog, setOpenDetailDialog] = useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDetailClose = () => {
    setAnchorEl(null);
    setOpenDetailDialog(true);
  };
  const handleEditClose = () => {
    setAnchorEl(null);
    setOpenEditDialog(true);
  };
  const handleDeleteClose = () => {
    setAnchorEl(null);
    setOpenDeleteDialog(true);
  };

  return (
    <div data-testid={`action-menu-${userId}`}>
      <Button
        id={`action-button-${userId}`}
        data-testid={`action-button-${userId}`}
        aria-controls={open ? `action-menu-${userId}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        size="small"
      >
        Action
      </Button>
      <StyledMenu
        id={`action-menu-items-${userId}`}
        data-testid={`action-menu-items-${userId}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `action-button-${userId}`,
        }}
      >
        <MenuItem onClick={handleDetailClose} data-testid={`menu-item-detail-${userId}`}>
          <VisibilityIcon />
          <span>Detail</span>
        </MenuItem>
        <MenuItem onClick={handleEditClose} data-testid={`menu-item-edit-${userId}`}>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteClose} data-testid={`menu-item-delete-${userId}`}>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
      <DetailDialog
        open={openDetailDialog}
        userId={userId}
        onClose={() => setOpenDetailDialog(false)}
      />
      <EditDialog
        open={openEditDialog}
        userId={userId}
        onClose={() => setOpenEditDialog(false)}
        onConfirm={() => setOpenEditDialog(false)}
        onCancel={() => setOpenEditDialog(false)}
      />
      <DeleteDialog
        open={openDeleteDialog}
        userId={userId}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={() => setOpenDeleteDialog(false)}
        onCancel={() => setOpenDeleteDialog(false)}
      />
    </div>
  );
}
