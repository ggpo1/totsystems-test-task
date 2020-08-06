import IBarPage from '../models/IBarPage';
import IMessagesBar from '../models/IMessagesBar';
import IUser from '../models/IUser';
import user, { me } from './UsersData';



const MessagesBarSelectorPages: Array<IBarPage> = [
    {
        key: 'selector_chats_groups',
        title: 'groups',
        lastMessages: [
            {
                key: 'message_0',
                user: user,
                message: 'How is your task?',
                chatKey: 'required_work_chat',
                chatName: 'General Work Chat'
            },
            {
                key: 'message_1',
                user: user,
                message: 'How do you do?',
                chatKey: 'flood_chat',
                chatName: 'Flood Chat:)'
            }
        ]
    },
    {
        key: 'selector_chats_personal',
        title: 'personal',
        lastMessages: [
            {
                key: 'message_2',
                user: user,
                message: 'Whats up?',
                chatName: user.login,
                chatKey: `${user.key}_${me.key}`
            }
        ]
    }
];

const MessagesBarSource: IMessagesBar = {
    pages: MessagesBarSelectorPages,
}

export default MessagesBarSource;