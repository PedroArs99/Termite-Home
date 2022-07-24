export interface MessagesPort {
    publishMessage(topic: string, payload: any): void;
}