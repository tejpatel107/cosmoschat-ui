import React from "react";
import ChatBox from "./features/ChatBox.jsx"
import SideBar from "./layout/SideBar.jsx";
import NavBar from "./layout/NavBar.jsx";

function App() {
  return (
    <div style={{ display: "flex", width: "100%", height:"100vh", backgroundColor:"#131314"}}>
      <SideBar />
      <ChatBox />
    </div>
  );
}

export default App;
