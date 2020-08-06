import IMessage from "./IMessage";

interface IBarPage {
    key: string,
    title: string,
    lastMessages: Array<IMessage>
}

export default IBarPage;