import { Drawer, IconButton, List, Button, ListItemButton, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';

const listButtonStyle = {
    // border : "1px solid black",
    margin: "5px 0 5px 0",
    height: "35px",
    borderRadius: "25px",
    backgroundColor: "#035",
    color: "#e3e3e3"
}

function SideBar() {

    function toggleDrawer(action) {
        setOpen(action);
    }

    const [open, setOpen] = useState(true);
    const [messages, setMessages] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendMessage = (text) => {
        setMessages([...messages, { text, senderId: 'You' }]);
    };


    return (
        <div style={{ width: "20%" }}>
            <Drawer
                variant="persistent"
                open={open}
                anchor="left"
                sx={{
                    '& .MuiPaper-root': {
                        position: 'absolute',
                        backgroundColor: "#1e1f20",
                        width: "20%"
                    },
                }}
            > 
                <Button sx={{
                    marginTop: "65px",
                    marginBottom: "30px",
                    position: "relative",
                    left: "15px",
                    borderRadius: "35px",
                    width: "55%",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <IconButton sx={{ color: "#e3e3e3" }} disableRipple>
                        <AddIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: "#e3e3e3", fontFamily: "sans-serif" }}>New Chat</Typography>
                </Button>
                <Typography sx={{ marginLeft: "8px", color: "#e3e3e3"}}>
                    Previous Chats
                </Typography>
                <List  >
                    <ListItem style={listButtonStyle}>
                        <ListItemButton disableTouchRipple sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                            Chat 1
                        </ListItemButton>
                        <IconButton sx={{ position: "relative", left: "6%", color: "#e3e3e3" }}>
                            <MoreVertIcon />
                        </IconButton>
                    </ListItem>

                </List>
            </Drawer>
        </div>
    )
};

export default SideBar;