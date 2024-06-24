import { Drawer, IconButton, List, Button, ListItemButton, ListItem, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddIcon from '@mui/icons-material/Add';
import { deleteSession, getSession, getSessions } from "../api/Sessions";

const listButtonStyle = {
    margin: "5px 0 5px 0",
    height: "35px",
    borderRadius: "25px",
    backgroundColor: "#035",
    color: "#e3e3e3"
}

function SideBar({ openChatBox, openPreviousSession, startNewSession }) {

    const [open, setOpen] = useState(true);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        getSessions().then((res) => {
            setSessions([...sessions, ...res.data]);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function handleOpenPreviousSession(sessionId) {
        getSession({ sessionId }).then((res) => {
            openPreviousSession(res.data);
            openChatBox();
        }).catch((error) => {
            console.log(error);
        });
    }

    function handleDeleteSession(sessionId) {
        const todaysDate = (new Date()).toLocaleDateString();
        deleteSession({ sessionId, date: todaysDate });
        setSessions(sessions.filter((session) => session.sessionId !== sessionId));
    }

    function handleStartNewChat() {
        startNewSession();
        openChatBox();
    }

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
                <Button
                    sx={{
                        marginTop: "65px",
                        marginBottom: "30px",
                        position: "relative",
                        left: "15px",
                        borderRadius: "35px",
                        width: "55%",
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}

                    onClick={handleStartNewChat}
                >
                    <IconButton
                        sx={{ color: "#e3e3e3" }} disableRipple>
                        <AddIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ color: "#e3e3e3", fontFamily: '"Google Sans", "Helvetica Neue", "sans-serif"' }}>
                        New Chat
                    </Typography>
                </Button>

                <Typography
                    variant="h5"
                    sx={{
                        marginLeft: "8px",
                        color: "#e3e3e3",
                        fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                    }}>
                    Previous Chats
                </Typography>

                <List>
                    {sessions.map((session) => {
                        return (
                            <ListItem id={session.sessionId} style={listButtonStyle}>
                                <ListItemButton
                                    disableTouchRipple
                                    sx={{
                                        "&:hover": { backgroundColor: "transparent" },
                                        fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                                    }}
                                    onClick={() => { handleOpenPreviousSession(session.sessionId) }}
                                >
                                    {(session.Messages.length > 1 &&
                                        session.Messages[1].message) ||
                                        (session.Messages[0].message)}
                                </ListItemButton>
                                <IconButton
                                    aria-label="more"
                                    id="delete-button"
                                    // aria-controls={anchorDeleteMenuOpen ? 'delete-menu' : undefined}
                                    // aria-expanded={anchorDeleteMenuOpen ? 'true' : undefined}
                                    aria-haspopup="true"
                                    sx={{ position: "relative", left: "6%", color: "#e3e3e3" }}
                                    onClick={() => handleDeleteSession(session.sessionId)}
                                >
                                    <DeleteRoundedIcon sx={{
                                        color:"#d11a2a"
                                    }}/>
                                </IconButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </div>
    )
};

export default SideBar;