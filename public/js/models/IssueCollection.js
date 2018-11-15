class IssueCollection {

    constructor(issueCollection) {
        if (issueCollection) {
            this.collection = issueCollection.collection;
        } else {
            this.collection = [];
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

    indexOfIdentifier(client_id) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i].client_id == client_id) {
                return i;
            }
        }
        return -1;
    }

    getByIdentifier(identifier) {
        let index = this.indexOfIdentifier(identifier);
        if (index < 0) {
            return null;
        }
        return this.collection[index];
    }

    remove(client_id) {
        var index = this.indexOfIdentifier(client_id);
        if (index != -1) {
            this.collection.splice(index, 1);
        }
    }
}