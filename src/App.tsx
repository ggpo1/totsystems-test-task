import React, { useState } from 'react';
import './styles/App.css';
import MessagesBar from './components/MessagesBar';
import ChatFlow from './components/ChatFlow';
import { RequiredChatData, FloodChatData } from './data/ChatFlowsData';
import MessagesBarSource from './data/MessagesBarSelectorPages';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { me } from './data/UsersData';
import IMessage from './models/IMessage';

function App() {
  const [requiredChatData, setRequiredChatData] = useState(RequiredChatData);
  const [floodChatData, setFloodChatData] = useState(FloodChatData);

  let history = useHistory();

  let sendAction = (message: IMessage) => {
    switch (message.chatKey) {
      case 'required_work_chat': {
        let chat = requiredChatData;
        chat.messages.push(message);
        setRequiredChatData(chat);
        break;
      }
      case 'flood_chat': {
        let chat = floodChatData;
        chat.messages.push(message);
        setFloodChatData(chat);
        break;
      }
      default:
        break;
    }
  }

  return (
    <Switch>
      <Route path="/board">
        <div className="App">
          <div className={'required-chat-wrapper'}>
            <ChatFlow sendAction={sendAction} userInfo={me} source={requiredChatData} bgColor={'#4f76a6'} />
          </div>
          <div className={'app-mb-wrapper'}>
            <MessagesBar source={MessagesBarSource} />
          </div>
          <div className={'not-required-chat-wrapper'}>
            <ChatFlow sendAction={sendAction} userInfo={me} source={floodChatData} bgColor={'#4f76a6'} />
          </div>
        </div>
      </Route>
      <Route path="/">
        <div className={'login-wrapper'}>
          <div className={'login'}>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
              <input type="text" value={'frontender'} />
              <input type="password" value={'qwerty123'} />
            </div>
            <button onClick={() => history.push("/board")}>login</button>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
