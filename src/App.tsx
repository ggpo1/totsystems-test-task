import React from 'react';
import './styles/App.css';
import MessagesBar from './components/MessagesBar';

function App() {
  return (
    <div className="App">
      <div className={'required-chat-wrapper'}>
        work
      </div>
      <div className={'app-mb-wrapper'}>
        <MessagesBar />
      </div>
      <div className={'not-required-chat-wrapper'}>
        flood
      </div>
    </div>
  );
}

export default App;
