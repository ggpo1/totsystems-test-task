import IChat from "./IChat";
import IUser from "./IUser";

interface IMessage {
    key: string,
    user: IUser,
    message: string,
    chatKey: string,
    chatName: string
}

export default IMessage;