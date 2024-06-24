import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";

function NavBar({ closeChatBox, callSaveChat, openActivityDashboard, closeActivityDashboard }) {

    function handleCloseChat() {
        closeChatBox();
    }

    function handleSaveChat() {
        callSaveChat();
    }

    function handleActivityDetailsClick() {
        openActivityDashboard();
    }

    function handleCloseActivityDetailsClick() {
        closeActivityDashboard();
    }

    return (
        <div >
            <AppBar position="static" sx={{ height: "60px", backgroundColor: "#131314" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            size="md"
                            color="primary"
                            variant="contained"
                            sx={{
                                margin: '5px 0px 5px 0px',
                                fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                            }}

                            onClick={handleActivityDetailsClick}
                        >
                            Activity Details
                        </Button>

                        <Button
                            size="md"
                            color="primary"
                            variant="outlined"
                            sx={{
                                margin: '5px 0px 5px 20px',
                                fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                            }}

                            onClick={handleCloseActivityDetailsClick}
                        >
                            Close Activity Details
                        </Button>
                    </Box>

                    {/* <Typography
                        variant="h6"
                        sx={{ color: "#e3e3e3", fontFamily: '"Google Sans", "Helvetica Neue", "sans-serif"', }}
                    >
                        Cosmos
                    </Typography> */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button onClick={handleSaveChat}
                            size="md"
                            color="primary"
                            variant="contained"
                            sx={{
                                margin: '5px 0px 5px 20px',
                                fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                            }}
                        >
                            Save Chat
                        </Button>

                        <Button onClick={handleCloseChat}
                            size="md"
                            color="primary"
                            variant="outlined"
                            sx={{
                                margin: '5px 0px 5px 20px',
                                fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                            }}
                        >Close Chat</Button>


                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;