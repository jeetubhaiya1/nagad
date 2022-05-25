import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import './DashSidebar.scss'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';

const DashSidebar = (props) => {

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showNestedSubMenu, setShowNestedSubMenu] = useState(false);
    const [showSubNestedSubMenu, setShowSubNestedSubMenu] = useState(false);

    const handleClose = () => {
        props.setToggleSider(false);
        setShowSubNestedSubMenu(false);
        setShowNestedSubMenu(false);
        setShowSubMenu(false);
    }


    return (
            <div className="dash_side_drawer">
                <Drawer
                    className="dash_drawer"
                    anchor="left"
                    open={props.toggleSider}
                    onClose={handleClose}
                >
                    <List className="list">
                        <ListItem disablePadding className={showSubMenu ? "highlight_listitem" :"list_item"} onClick={()=>setShowSubMenu(!showSubMenu)}>
                            <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Management Portal" />
                            <ListItemIcon>
                                <ExpandMoreIcon className="expand_icon" />
                            </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        {
                            showSubMenu && (
                                <List>
                                    <ListItem disablePadding className="merc_mgmt" onClick={()=>setShowNestedSubMenu(!showNestedSubMenu)}>
                                        <ListItemButton>
                                        <ListItemIcon>
                                           <ManageAccountsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Merchant Management" />
                                        <ListItemIcon>
                                            <ExpandMoreIcon className="expand_icon" />
                                        </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                {
                                    showNestedSubMenu && (
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
                                            <ListItem disablePadding className={showSubMenu ? "highlight_listitem" :"list_item"} onClick={()=>setShowSubNestedSubMenu(!showSubNestedSubMenu)}>
                                                <ListItemButton className="list_item_button">
                                                <ListItemText primary="Merchant Registeration" />
                                                <ListItemIcon>
                                                    <ExpandMoreIcon className="expand_icon" />
                                                </ListItemIcon>
                                                </ListItemButton>
                                            </ListItem>

                                            {
                                                showSubNestedSubMenu && (
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
                                                )
                                            }

                                        </List>
                                    )
                                }
                                </List>
                            )
                        }
                    </List>
                </Drawer>
            </div>       
    )
}

export default DashSidebar