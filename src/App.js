import React, { useState } from "react";
import SideBar from "./layout/SideBar.jsx";
import ChatArea from "./features/ChatBox/ChatArea.jsx";

function App() {

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [isPreviousSessionOpen, setIsPreviousSessionOpen] = useState(false);
  const [previousSession, setPreviousSession] = useState(null);
  
  function handleOpenChatBox() {
    setIsChatBoxOpen(true);
  }

  function handleCloseChatBox() {
    setIsChatBoxOpen(false);
    setIsPreviousSessionOpen(false);
  }

  function handleStartNewSession(){
    setIsPreviousSessionOpen(false);
  }

  function handleOpenPreviousSesssion(session){
    setIsPreviousSessionOpen(true);
    setPreviousSession(session);
  }

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", 
    backgroundColor: "#131314" }}>
      <SideBar
        openChatBox={handleOpenChatBox}
        openPreviousSession={handleOpenPreviousSesssion}
        startNewSession={handleStartNewSession}
      />
      <ChatArea
        isChatBoxOpen={isChatBoxOpen}
        closeChatBox={handleCloseChatBox}
        prevSession={previousSession}
        isPrevSessionOpen={isPreviousSessionOpen}
      />
    </div>
  );
}

export default App;
