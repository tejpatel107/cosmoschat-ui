import React, { useState } from "react";
import { MainContainer, ChatContainer, Message, MessageList, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { Button, Typography, } from "@mui/material";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import OpenAI from "openai";
import NavBar from "../layout/NavBar.jsx";

const chatContainerStyle = {
    height: '80vh',
    border: "1px solid grey",
    borderRadius: 10,
    display: "flex"
};

const API_KEY = "Empty string";

const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

function ChatBox() {

    const [messages, setMessages] = useState([{
        message: "Hello!, I am your CosmosChat bot!",
        sender: "ChatGPT",
        direction: "incoming"
    }]);

    const [showChatBox, setShowChatBox] = useState(false);

    const [typing, setTyping] = useState(false);

    const [welcomeStyle, setWelcomeStyle] = useState({
        welcomeText: true,
        showStartChatButton: true,
    });

    function handleStartChat() {
        setShowChatBox(true);
        setWelcomeStyle({
            topMargin: 50,
            welcomeText: false,
            showStartChatButton: false,
        })
    }

    function handleCloseChat() {
        setShowChatBox(false);
        setWelcomeStyle({
            ...welcomeStyle,
            showStartChatButton: true,
        })
    }

    const handleSentMessages = function (message) {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true);

        handleProcessMessagesToChatGPT(newMessages);
    }

    async function handleProcessMessagesToChatGPT(chatMessages) {

        let apiMessages = chatMessages.map((messageObject) => {
            let role = ""
            if (messageObject.sender === "ChatGPT")
                role = "assistant"
            else
                role = "user"

            return { role: role, content: messageObject.message }
        });

        const systemMessage = {
            role: "system",
            content: "Explain things like you're talking to a software professional with 2 years of experience."
        }

        const requestBody = {
            messages: [systemMessage, ...apiMessages],
            model: "gpt-3.5-turbo"
        }

        const response = await openai.chat.completions.create(requestBody);

        setMessages([
            ...chatMessages,
            {
                sender: "ChatGPT",
                message: response.choices[0].message.content,
                direction: "incoming"
            }]);

        setTyping(false);
    }

    return (
        <div
            style={{
                width: "80%",
            }} >

            <NavBar />

            <div 
                style={{
                    position: "relative",
                    top: "250px",
                    display: "flex",
                    flexDirection:"column", 
                    alignItems: "center", 
                    justifyContent: "center"
                }}>

                {welcomeStyle.welcomeText &&
                    <Typography variant="h3" style={{ marginBottom: 20, color: "#e3e3e3"}}>Welcome to the Cosmos!</Typography>
                }

                {welcomeStyle.showStartChatButton &&
                    <Button onClick={handleStartChat}
                        size="md"
                        color="primary"
                        variant="contained"
                        style={{ marginRight: 20 }}
                    >Start a New Chat</Button>}
            </div>

            {showChatBox &&
                <div>
                    <Button onClick={handleCloseChat}
                        size="md"
                        color="primary"
                        variant="contained"
                        sx={{margin:'5px 0px 5px 5px'}}
                    >Close Chat</Button>

                    <MainContainer style={chatContainerStyle}  >
                        <ChatContainer >
                            <MessageList
                                typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing!" /> : null}>
                                {messages.map((message, i) => {
                                    return <Message key={i} model={message} />
                                })}
                            </MessageList>
                            <MessageInput placeholder="Type here" onSend={handleSentMessages} />
                        </ChatContainer>
                    </MainContainer>
                </div>
            }
        </div>
    )
};

export default ChatBox;