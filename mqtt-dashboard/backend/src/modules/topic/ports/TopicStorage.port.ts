import { Topic } from "../models/topic.model";

export interface TopicStoragePort {
    getAllSysTopics(): Promise<Topic[]>
}