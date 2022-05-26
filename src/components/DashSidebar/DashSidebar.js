import React, { useState } from "react";
import "./DashSidebar.scss";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";

const DashSidebar = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showNestedSubMenu, setShowNestedSubMenu] = useState(false);
  const [showSubNestedSubMenu, setShowSubNestedSubMenu] = useState(false);

  const handleClose = () => {
    setShowSubNestedSubMenu(false);
    setShowNestedSubMenu(false);
    setShowSubMenu(false);
  };

    const handleListClose = () => {
        setShowSubNestedSubMenu(false);
        setShowNestedSubMenu(false);
        setShowSubMenu(false);
    }

  return (
    <div className="dash_side_drawer">
      <Box className="dash_drawer" onClose={handleClose}>
        <List className="list">
          <ListItem
            disablePadding
            className={showSubMenu ? "highlight_listitem" : "list_item"}
            onClick={showSubMenu ? handleListClose  :
                                () => setShowSubMenu(!showSubMenu)
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Management Portal" />
            { showSubMenu ? (
                <ListItemIcon>
                   <ExpandLessIcon className="expand_icon" />
                </ListItemIcon>
                ) : (
                <ListItemIcon>
                   <ExpandMoreIcon className="expand_icon" />
                </ListItemIcon>
                )            
            }   
            </ListItemButton>
          </ListItem>
          {showSubMenu && (
            <List>
              <ListItem
                disablePadding
                className="merc_mgmt"
                onClick={() => setShowNestedSubMenu(!showNestedSubMenu)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Merchant Management" />
                  { showNestedSubMenu ? (
                    <ListItemIcon>
                        <ExpandLessIcon className="expand_icon" />
                    </ListItemIcon>
                    ) : (
                    <ListItemIcon>
                        <ExpandMoreIcon className="expand_icon" />
                    </ListItemIcon>
                    )            
                }
                </ListItemButton>
              </ListItem>
              {showNestedSubMenu && (
                <List className="nested_list">
                  <ListItem disablePadding className="list_item">
                    <ListItemButton className="list_item_button">
                      <ListItemText primary="Merchant List" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="list_item">
                    <ListItemButton className="list_item_button">
                      <ListItemText primary="Merchant Type" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    className={showSubMenu ? "highlight_listitem" : "list_item"}
                    onClick={() =>
                      setShowSubNestedSubMenu(!showSubNestedSubMenu)
                    }
                  >
                    <ListItemButton className="list_item_button">
                      <ListItemText primary="Merchant Registeration" />
                      { showSubNestedSubMenu ? (
                        <ListItemIcon>
                        <ExpandLessIcon className="expand_icon" />
                        </ListItemIcon>
                        ) : (
                        <ListItemIcon>
                        <ExpandMoreIcon className="expand_icon" />
                        </ListItemIcon>
                        )            
                    }
                    </ListItemButton>
                  </ListItem>

                  {showSubNestedSubMenu && (
                    <List className="sub_nested_list">
                      <ListItem disablePadding className="nested_list_item">
                        <ListItemButton className="list_item_button">
                          <ListItemText primary="Single Registeration" />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding className="nested_list_item">
                        <ListItemButton className="list_item_button">
                          <ListItemText primary="Bulk Registeration" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  )}
                </List>
              )}
            </List>
          )}
        </List>
      </Box>
    </div>
  );
};

export default DashSidebar;
