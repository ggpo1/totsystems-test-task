import React, { Component, useState } from 'react';
import IChat from './../models/IChat';

import '../styles/ChatFlow.css';
import IMessage from './../models/IMessage';
import IUser from '../models/IUser';

interface IChatFlowProps {
    source: IChat,
    bgColor: string,
    userInfo: IUser,
    sendAction: any
}

interface IChatFlowState {
    source: IChat,
    bgColor: string,
    textMessage: string,
    userInfo: IUser,
    sendAction: any,
    lastMessage?: IMessage
}

class ChatFlow extends Component<IChatFlowProps, IChatFlowState> {
    constructor(props: IChatFlowProps) {
        super(props);

        this.state = {
            ...{
                textMessage: '',
                lastMessage: undefined
            }, ...props
        };

    }

    static getDerivedStateFromProps(props: IChatFlowProps, state: IChatFlowState) {
        return { ...props };
    }

    public sendMessageAction = (message: string) => {
        const { source, userInfo, sendAction } = this.state;
        let newMessage: IMessage = {
            key: `message_${Math.random() * 100}`,
            user: userInfo,
            message,
            chatKey: source.key,
            chatName: source.title
        }
        this.setState({ lastMessage: newMessage });
        sendAction(newMessage);
    }

    render() {
        const { source, bgColor } = this.state;

        return (
            <div style={{ background: bgColor }} className={'chat-flow-wrapper'}>
                <ChatFlowTitle title={source.title} />
                <ChatFlowMessages messages={source.messages} />
                <ChatFlowTextBox sendAction={this.sendMessageAction} />
            </div>
        );
    }
}

interface IChatFlowTitleProps {
    title: string
}

function ChatFlowTitle(props: IChatFlowTitleProps) {
    return (
        <div className={'chat-title-block'}>{props.title.toUpperCase()}</div>
    );
}

interface IChatFlowMessagesProps {
    messages: Array<IMessage>
}

function ChatFlowMessages(props: IChatFlowMessagesProps) {
    const [messages] = useState<Array<IMessage>>(props.messages);

    let messageBlocks: Array<JSX.Element> = [];
    messages.forEach(el => messageBlocks.push(
        <div key={el.key} className={'chat-message-block'}>
            <div style={{ width: 'auto' }} className={'chat-message'}>
                <div>{el.user.login}</div>
                <div>{el.message}</div>
            </div>
        </div>
    ));

    return (
        <div className={'chat-flow-messages-wrapper'}>
            {messageBlocks}
        </div>
    );
}

interface IChatFlowTextBoxProps {
    sendAction: any
}

function ChatFlowTextBox(props: IChatFlowTextBoxProps) {
    const [textMessage, setTextMessage] = useState('');

    let sendAction = () => {
        setTextMessage(''); 
        props.sendAction(textMessage);
    }

    return (
        <div className={'cf-text-box'}>
            <input onChange={(e) => setTextMessage(e.target.value)} className={'input-text-box'} placeholder={'Write your message...'} type="text" value={textMessage} />
            <div className={'input-send-button-block'}>
                <input disabled={textMessage.length === 0} onClick={sendAction} className={'input-send-button'} type="button" value="отправить" />
            </div>
        </div>
    );
}

export default ChatFlow;