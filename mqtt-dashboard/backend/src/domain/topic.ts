export class Topic {
    private name : String;
    private regex: RegExp;

    constructor(name: String, topic: RegExp | String){
        this.name = name;

        if(typeof topic === 'string'){
            topic = new RegExp(topic)
        }

        this.regex = topic as RegExp;
    }
}