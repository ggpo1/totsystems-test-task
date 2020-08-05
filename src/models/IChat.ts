import IMessage from './IMessage';
import IUser from './IUser';

interface IChat {
    key: string,
    title: string,
    members: Array<IUser>,
    messages: Array<IMessage>
}

export default IChat;