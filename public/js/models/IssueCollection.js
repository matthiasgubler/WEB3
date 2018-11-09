class IssueCollection {
    constructor(tag) {
        this.collection = [new Issue('My Issue', '12.01.1993', true,3), new Issue('Freddy Issue', '33.01.1993', false,1)];
        if (tag) {
            this.riotjs_tag = tag;
        }
    }

    getPrioritySorted() {
        return this.collection.sort(function(a,b){ return b.priority - a.priority});
    }

    get() {
        return this.collection;
    }

    add(model) {
        this.collection.push(model);
    }

    remove(model) {
        this.collection.pop(model);
    }
}