import IChat from './../models/IChat';
import user from './UsersData';

export const RequiredChatData: IChat = {
    key: 'required_work_chat',
    title: 'General Work Chat',
    members: [],
    messages: [
        {
            key: 'message_0',
            user: user,
            message: 'Hello!)',
            chatKey: 'required_work_chat',
            chatName: 'General Work Chat'
        },
        {
            key: 'message_0',
            user: user,
            message: 'How is your task?',
            chatKey: 'required_work_chat',
            chatName: 'General Work Chat'
        },
    ]
};

export const FloodChatData: IChat = {
    key: 'flood_chat',
    title: 'Flood Chat:)',
    members: [],
    messages: [
        {
            key: 'message_0',
            user: user,
            message: 'Hello!)',
            chatKey: 'flood_chat',
            chatName: 'Flood Chat:)'
        },
        {
            key: 'message_0',
            user: user,
            message: 'How do you do?',
            chatKey: 'flood_chat',
            chatName: 'Flood Chat:)'
        },
    ]
};
