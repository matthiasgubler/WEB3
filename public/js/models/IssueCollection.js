class IssueCollection {
    constructor(tag) {
        this.collection = [new Issue('My Issue', '12.01.1993', true, 3), new Issue('Freddy Issue', '33.01.1993', false, 1)];
        if (tag) {
            this.riotjs_tag = tag;
        }
    }

    getPrioritySorted() {
        return this.collection.sort(function (a, b) {
            return a.priority - b.priority;
        });
    }

    get() {
        return this.collection;
    }

    add(model) {
        this.collection.push(model);
    }

    indexOfIdentifier(identifier) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i].identifier == identifier) {
                return i;
            }
        }
        return -1;
        this.collection.pop(model);
    }

    remove(identifier) {
        var index = this.indexOfIdentifier(identifier);
        if (index != -1) {
            this.collection.splice(index, 1);
        }
    }
}