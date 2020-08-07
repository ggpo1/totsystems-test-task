import IMessage from './IMessage';
import IUser from './IUser';
import ChatType from './enums/ChatType';

interface IChat {
    key: string,
    type: ChatType,
    title: string,
    members: Array<IUser>,
    messages: Array<IMessage>
}

export default IChat;