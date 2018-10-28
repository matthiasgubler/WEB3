class IssueCollection {
    constructor(tag) {
        this.collection = [new Issue('My Issue', '12.01.1993', true), new Issue('Freddy Issue', '33.01.1993', false)];
        if (tag) {
            this.riotjs_tag = tag;
        }
    }

    get() {
        return this.collection;
    }

    add(model) {
        this.collection.push(model);
    }

    remove(model) {
        this.collection.push(model);
    }
}