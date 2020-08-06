import React, { Component, useState } from 'react';

import '../styles/MessagesBar.css';
import IBarPage from '../models/IBarPage';
import IMessagesBar from '../models/IMessagesBar';
import IMessage from '../models/IMessage';


interface IMessagesBarSelectorProps {
    pages: Array<IBarPage>,
    selectedPage: string,
    selectAction: Function
}

interface IMessagesBarState {
    source: IMessagesBar
    selectedPage: string
}

interface IMessagesBarProps {
    source: IMessagesBar
}

class MessagesBar extends Component<IMessagesBarProps, IMessagesBarState> {
    constructor(props: IMessagesBarProps) {
        super(props);
        this.state = {
            source: props.source,
            selectedPage: props.source.pages[0].key
        }
    }

    render() {
        const { source, selectedPage } = this.state;

        let selectedPageObj = source.pages.filter(page => page.key === selectedPage)[0];
        let pageLastMessages: Array<JSX.Element> = [];
        selectedPageObj.lastMessages.forEach(el => pageLastMessages.push(
            <div key={el.key} className={'mb-message'}>
                <div style={{ color: '#4f76a6' }}>{el.chatName}</div>
                <div><span>{el.user.login}: </span><span> {el.message}</span></div>
            </div>
        ));

        return (
            <div className={'mb-wrapper'}>
                <MessagesBarSelector
                    selectedPage={selectedPage}
                    selectAction={(key: string) => this.setState({ selectedPage: key })}
                    pages={source.pages}
                />
                <div className={'mb-messages'}>
                    {pageLastMessages}
                </div>
            </div>
        );
    }
}

function MessagesBarSelector(props: IMessagesBarSelectorProps) {
    const [pages] = useState<Array<IBarPage>>(props.pages),
        [selectedPage, setSelectedPage] = useState(props.selectedPage),
        [prevSelectedPage, setPrevSelectedPage] = useState<string>('');
    // [selectAction] = useState(props.selectAction)
    // console.log(selectedPage);
    if (selectedPage !== prevSelectedPage) {

        setSelectedPage(props.selectedPage);
        setPrevSelectedPage(props.selectedPage);
    }


    let pageBlocks: Array<JSX.Element> = [];
    pages.forEach(el => pageBlocks.push(
        <div
            key={el.key}
            className={'md-selector-title'}
            style={{ color: selectedPage === el.key ? 'gray' : '#e5e5e5' }}
            onClick={() => { setSelectedPage(el.key); props.selectAction(el.key) }}
        >
            {el.title}
        </div>
    ));

    return (
        <div className={'mb-selector-wrapper'}>
            <div className={'mb-selector'}>
                {pageBlocks}
            </div>
        </div>
    );
}


export default MessagesBar;