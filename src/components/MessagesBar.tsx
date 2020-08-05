import React, { Component, useState } from 'react';

import '../styles/MessagesBar.css';
import ISelectorPage from './../models/ISelectorPage';
import MessagesBarSelectorPages from './../data/MessagesBarSelectorPages';


interface IMessagesBarSelectorProps {
    pages: Array<ISelectorPage>,
    selectedPage: string,
    selectAction: Function
}

interface IMessagesBarState {
    selectedPage: string
}

interface IMessagesBarProps {

}

class MessagesBar extends Component<IMessagesBarProps, IMessagesBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedPage: 'selector_chats_groups'
        }
    }

    render() {
        const { selectedPage } = this.state;
        console.log('re-render');

        return (
            <div className={'mb-wrapper'}>
                <MessagesBarSelector
                    selectedPage={selectedPage}
                    selectAction={(key: string) => this.setState({ selectedPage: key })}
                    pages={MessagesBarSelectorPages}
                />
            </div>
        );
    }
}

function MessagesBarSelector(props: IMessagesBarSelectorProps) {
    const [pages] = useState<Array<ISelectorPage>>(props.pages),
        [selectedPage, setSelectedPage] = useState(props.selectedPage);
        let [prevSelectedPage, setPrevSelectedPage] = useState<string>('');
        // [selectAction] = useState(props.selectAction)

    if (selectedPage !== prevSelectedPage) {
        console.log('123');
        setSelectedPage(props.selectedPage);
        setPrevSelectedPage(props.selectedPage);
    }


    let pageBlocks: Array<JSX.Element> = [];
    pages.forEach(el => pageBlocks.push(
        <div
            key={el.key}
            className={'md-selector-title'}
            style={{ color: selectedPage === el.key ? 'black' : '#e5e5e5' }}
            onClick={() => props.selectAction(el.key)}
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

function BarMessage() {
    return (
        <div className={'mb-message-wrapper'}>

        </div>
    );
}

export default MessagesBar;