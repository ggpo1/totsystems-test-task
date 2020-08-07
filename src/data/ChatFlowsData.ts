import IChat from './../models/IChat';
import user, { me } from './UsersData';
import ChatType from '../models/enums/ChatType';

export const ChatsData: Array<IChat> = [
    {
        key: 'required_work_chat',
        type: ChatType.GROUP,
        title: 'General Work Chat',
        members: [me, user],
        messages: [
            {
                key: 'message_12',
                user: user,
                message: 'Hello!',
                chatKey: 'required_work_chat',
                chatName: 'General Work Chat'
            },
            {
                key: 'message_12441',
                user: user,
                message: 'How is your task?',
                chatKey: 'required_work_chat',
                chatName: 'General Work Chat'
            },
        ]
    },
    {
        key: 'flood_chat',
        type: ChatType.GROUP,
        title: 'Flood Chat:)',
        members: [me, user],
        messages: [
            {
                key: 'message_12515',
                user: user,
                message: 'Hi!',
                chatKey: 'flood_chat',
                chatName: 'Flood Chat:)'
            },
            {
                key: 'message_16626',
                user: user,
                message: 'How do you do?',
                chatKey: 'flood_chat',
                chatName: 'Flood Chat:)'
            },
        ]
    },
    {
        key: `${user.key}_${me.key}`,
        type: ChatType.PERSONAL,
        title: user.login,
        members: [],
        messages: [
            {
                key: 'message_1268900',
                user: user,
                message: 'Whats up?',
                chatName: user.login,
                chatKey: `${user.key}_${me.key}`
            }
        ]

    }
];

// export const FloodChatData: IChat = ;
