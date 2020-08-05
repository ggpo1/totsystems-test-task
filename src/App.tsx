import React from 'react';
import './styles/App.css';
import MessagesBar from './components/MessagesBar';
import ChatFlow from './components/ChatFlow';
import { RequiredChatData, FloodChatData } from './data/ChatFlowsData';

function App() {
  return (
    <div className="App">
      <div className={'required-chat-wrapper'}>
        <ChatFlow source={RequiredChatData} bgColor={'#2b486a'} />
      </div>
      <div className={'app-mb-wrapper'}>
        <MessagesBar />
      </div>
      <div className={'not-required-chat-wrapper'}>
        <ChatFlow source={FloodChatData} bgColor={'#d2bba2'} />
      </div>
    </div>
  );
}

export default App;
