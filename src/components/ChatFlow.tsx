import React, { Component } from 'react';
import IChat from './../models/IChat';

import '../styles/ChatFlow.css';

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
            </div>
        );
    }
}

interface IChatFlowTitleProps {
    title: string
}

function ChatFlowTitle(props: IChatFlowTitleProps) {


    return (
        <div className={'chat-title-block'}>{props.title}</div>
    );
}

export default ChatFlow;