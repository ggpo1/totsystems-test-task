import React, { Component, useState } from 'react';
import IChat from './../models/IChat';

import '../styles/ChatFlow.css';
import IMessage from './../models/IMessage';

interface IChatFlowProps {
    source: IChat,
    bgColor: string
}

interface IChatFlowState {
    source: IChat,
    bgColor: string
}

class ChatFlow extends Component<IChatFlowProps, IChatFlowState> {
    constructor(props: IChatFlowProps) {
        super(props);

        this.state = { ...props };
    }

    render() {
        const { source, bgColor } = this.state;

        return (
            <div style={{ background: bgColor }} className={'chat-flow-wrapper'}>
                <ChatFlowTitle title={source.title} />
                <ChatFlowMessages messages={source.messages} />
                <ChatFlowTextBox />
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

function ChatFlowTextBox() {
    return (
        <div className={'cf-text-box'}>
            <input className={'input-text-box'} placeholder={'Write your message...'} type="text" />
            <div className={'input-send-button-block'}>
                <input className={'input-send-button'} type="button" value="отправить" />
            </div>
        </div>
    );
}

export default ChatFlow;