import React from 'react';
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

function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/board");
  }
  
  return (
      <Switch>
        <Route path="/board">
          <div className="App">
            <div className={'required-chat-wrapper'}>
              <ChatFlow source={RequiredChatData} bgColor={'#4f76a6'} />
            </div>
            <div className={'app-mb-wrapper'}>
              <MessagesBar source={MessagesBarSource} />
            </div>
            <div className={'not-required-chat-wrapper'}>
              <ChatFlow source={FloodChatData} bgColor={'#4f76a6'} />
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
              <button onClick={handleClick}>login</button>
            </div>
          </div>
        </Route>
      </Switch>
  );
}

export default App;
