import React, { useState, useEffect } from "react";
import { Typography, } from "@mui/material";
import NavBar from "../../layout/NavBar.jsx";
import ChatBox from "./ChatBox.jsx";
import { saveSession } from "../../api/Sessions.js";
import ActivityDashboard from "../Dashborad/ActivityDashboard.jsx";

function ChatArea({ isChatBoxOpen, closeChatBox, prevSession, isPrevSessionOpen }) {

    const initialMessage = {
        message: "Hello!, I am your CosmosChat bot!",
        sender: "ChatGPT",
        direction: "incoming"
    }

    const [sessionMessages, setSessionMessages] = useState([]);
    const [isActivityDashboardOpen, setActivityDashboardOpen] = useState(false);

    useEffect(() => {
        if (!isPrevSessionOpen) {
            setSessionMessages([initialMessage]);
        } else if (prevSession) {
            setSessionMessages(prevSession.messages);
        } else {
            // Handle the case where prevSession is undefined or null
            console.warn("prevSession is undefined or null. Consider providing a default value.");
        }
    }, [isPrevSessionOpen, prevSession]);

    async function handleSaveChat() {
        const todaysDate = (new Date()).toLocaleDateString();
        var sessionId = null;
        if (isPrevSessionOpen) {
            sessionId = prevSession.sessionId;
        }
        saveSession({ sessionId, newMessages: sessionMessages, date:todaysDate }).catch((error) => {
            console.log(error);
        });
    }

    function handleUpdateSessionMessages(newMessages) {
        setSessionMessages(newMessages);
    }

    function resetChatBox() {
        setSessionMessages([initialMessage]);
    }

    function handleOpenActivityDashboard() {
        setActivityDashboardOpen(true);
    }

    function handleCloseActivityDashboard() {
        setActivityDashboardOpen(false);
    }

    return (
        <div style={{ width: "80%" }} >
            <NavBar
                closeChatBox={() => {
                    closeChatBox();
                    resetChatBox();
                }}
                callSaveChat={handleSaveChat}
                openActivityDashboard={handleOpenActivityDashboard}
                closeActivityDashboard={handleCloseActivityDashboard}
            />
            {
                (isChatBoxOpen && !isPrevSessionOpen) ?
                    <ChatBox
                        messages={sessionMessages}
                        updateMessages={handleUpdateSessionMessages} />
                    : (isChatBoxOpen && isPrevSessionOpen) ?
                        <ChatBox
                            messages={sessionMessages}
                            updateMessages={handleUpdateSessionMessages} />
                        : isActivityDashboardOpen ?
                            <ActivityDashboard/>
                            :
                            <div
                                style={{
                                    position: "relative",
                                    top: "250px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "#e3e3e3",
                                        fontFamily: '"Google Sans","Helvetica Neue","sans-serif"'
                                    }}>Welcome to the Cosmos!</Typography>
                            </div>
            }
        </div>
    )
};

export default ChatArea;