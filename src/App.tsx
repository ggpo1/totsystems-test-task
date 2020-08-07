import React, { useState, useEffect } from 'react';
import './styles/App.css';
import MessagesBar from './components/MessagesBar';
import ChatFlow from './components/ChatFlow';
import { ChatsData } from './data/ChatFlowsData';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { me } from './data/UsersData';
import IMessage from './models/IMessage';
import ChatType from './models/enums/ChatType';
import IMessagesBar from './models/IMessagesBar';

function App() {
  const [chatsData, setChatsData] = useState(ChatsData);
  const [selectedChatKey, setSelectedChatKey] = useState('');
  const [updateNum, setUpdateNum] = useState(0); // The way is in react doc (like forceUpdate method)

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    // document.title = `хуй`;

    if (localStorage.chatsData !== undefined) {
      setChatsData(JSON.parse(localStorage.chatsData));
    }
  }, []);


  let history = useHistory();

  let sendAction = (message: IMessage) => {
    let chData = chatsData;
    chData.map(chat => {
      if (chat.key === message.chatKey) {
        chat.messages.push(message);
        return chat;
      }
      return chat;
    });

    setChatsData(chData);
    setUpdateNum(updateNum + 1);
    localStorage.chatsData = JSON.stringify(chData);
  }

  let deleteAction = (message: IMessage) => {
    let chData = chatsData;
    chData.map(chat => {
      if (chat.key === message.chatKey) {
        chat.messages = chat.messages.filter(msEl => msEl.key !== message.key);
        return chat;
      }
      return chat;
    });

    setChatsData(chData);
    setUpdateNum(updateNum + 1);
    localStorage.chatsData = JSON.stringify(chData);
  }

  let openChat = (chatKey: string) => {
    setSelectedChatKey(chatKey);
  }

  let selectedChat = chatsData.filter(chat => chat.key === selectedChatKey)[0];


  let personalChatsLastMessages: Array<IMessage> = [],
  groupChatsLastMessages: Array<IMessage> = [];

  chatsData.filter(chat => chat.type === ChatType.PERSONAL).forEach(el => personalChatsLastMessages.push(el.messages[el.messages.length - 1]));
  chatsData.filter(chat => chat.type === ChatType.GROUP).forEach(el => groupChatsLastMessages.push(el.messages[el.messages.length - 1]));
  
  let messagesBarSource: IMessagesBar = {
    pages: [
      {
        key: 'selector_chats_groups',
        title: 'groups',
        lastMessages: groupChatsLastMessages
      },
      {
        key: 'selector_chats_personal',
        title: 'personal',
        lastMessages: personalChatsLastMessages
      },
    ]
  }

  return (
    <Switch>
      <Route path="/board">
        <div className="App">
          <div className={'required-chat-wrapper'}>
            <ChatFlow deleteAction={deleteAction} sendAction={sendAction} userInfo={me} source={selectedChat} bgColor={'#4f76a6'} />
          </div>
          <div className={'app-mb-wrapper'}>
            <MessagesBar openAction={openChat} source={messagesBarSource} />
          </div>
          {/* <div className={'not-required-chat-wrapper'}>
            <ChatFlow sendAction={sendAction} userInfo={me} source={selectedChat} bgColor={'#4f76a6'} />
          </div> */}
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
