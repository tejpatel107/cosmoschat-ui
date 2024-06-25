CosmoChat-UI: Chat Application with GPT-3 Integration
Overview
This is a chat application built using React.js, Material-UI framework, ChatScope-UI-Kit; which integrates with OpenAI's GPT-3.5 model to provide conversational responses. The application also includes real-time statistics on user's sessions activity of previous 7 days using Nivo Charts Histogram.

Features
Real-time chat interface with ChatScope-UI-Kit
Integration with OpenAI's GPT-3.5 model for conversational responses
Histogram representing user's activity of saved sessions and deleted sessions in previous 7 days. 
Session Management: Users can save chat sessions, switch between sessions, continue chat with previous sessions and delete sessions.

Tech Stack:
React.js
ChatScope-UI-Kit
OpenAI GPT-3.5
Nivo Charts

Installation
Clone the repository: git clone https://github.com/your-username/your-repository.git
Navigate to the project directory: cd your-repository
Install dependencies: npm install
Obtain an OpenAI API key from https://openai.com/ and replace API_KEY in ChatBox.jsx with your key.
Start the development server: npm start

Usage
Launch the application using npm start.
Upon running the application, you can start chatting with the virtual assistant.
Click on "Activity Details" button to switch to the histogram graph view and "Close Activity Detail" to go back to the Welcome Area.
The "+ New Chat" button allows you to create new session/chat and chat with the bot.
You can save the current session save or close the session using the respective "save chat"/"close chat" buttons.
You can open previous chats by clicking directly on the desired chat tile listed under "Previous Chat" section, also you can delete by clicking the garbage button.

Application Screenshots:

![Cosmos Home Page](https://github.com/tejpatel107/cosmoschat-ui/assets/80436379/ed715278-c44b-4452-a079-48e749d6e911)

![Cosmos Chats](https://github.com/tejpatel107/cosmoschat-ui/assets/80436379/586384b0-7691-40ef-8bd2-c6136f0f5776)

![cosmos task 4](https://github.com/tejpatel107/cosmoschat-ui/assets/80436379/41c7081a-77a5-4511-b4d7-a2fa77b303f5)

Credits
React: https://reactjs.org/

Chat-UI-Kit: https://chatscope.io/

OpenAI: https://openai.com/

React Chart.js: https://www.npmjs.com/package/react-chartjs-2

Chatbot Guide: Cooper Codes

