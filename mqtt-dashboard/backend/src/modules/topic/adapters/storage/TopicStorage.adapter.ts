import { Injectable } from "@nestjs/common";
import { Topic } from "../../models/topic.model";
import { TopicStoragePort } from "../../ports/TopicStorage.port";
import { sysTopics } from "./sys";

@Injectable()
export class TopicStorageAdapter implements TopicStoragePort {
    async getAllSysTopics(): Promise<Topic[]> {
        return Promise.resolve(sysTopics);
    }
}