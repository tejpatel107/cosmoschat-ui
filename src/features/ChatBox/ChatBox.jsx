import React, { useState } from "react";
import { MainContainer, ChatContainer, Message, MessageList, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import OpenAI from "openai";
import {config} from "../../api/.apiConfig.js";

const API_KEY = config.apiKey;
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

const chatContainerStyle = {
    height: '87vh',
    width: '90%',
    display: "flex",
    position: "relative",
    border: "black",
    left: "5%",
    marginTop: "5px"
};

function ChatBox({ messages, updateMessages }) {

    const [typing, setTyping] = useState(false);

    function handleSentMessages(message) {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        };

        const newMessages = [...messages, newMessage];
        updateMessages(newMessages);
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

        updateMessages([
            ...chatMessages,
            {
                sender: "ChatGPT",
                message: response.choices[0].message.content,
                direction: "incoming"
            }]);

        setTyping(false);
    }

    return (
        <div >
            <MainContainer style={chatContainerStyle}  >
                <ChatContainer style={{ border: "black", backgroundColor: "#131314" }}>
                    <MessageList
                        style={{ backgroundColor: "#131314", marginTop: "15px" }}
                        typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing!" /> : null}>
                        {(messages.length > 0)  &&
                            messages.map((message, i) => {
                                return (
                                    <Message
                                        key={i}
                                        model={message} />
                                )
                            })}
                    </MessageList>
                    <MessageInput
                        style={{
                            backgroundColor: "#1e1f20",
                            borderRadius: "25px",
                        }}
                        placeholder="Type here"
                        onSend={handleSentMessages} />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default ChatBox;