import IChat from './../models/IChat';

export const RequiredChatData: IChat = {
    key: 'required_work_chat',
    title: 'General Work Chat',
    members: [],
    messages: [
        {
            key: 'message_0',
            userKey: 'user_0',
            message: 'Hello!)'
        },
        {
            key: 'message_0',
            userKey: 'user_0',
            message: 'How do you do?'
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
            userKey: 'user_0',
            message: 'Hello!)'
        },
        {
            key: 'message_0',
            userKey: 'user_0',
            message: 'How do you do?'
        },
    ]
};
