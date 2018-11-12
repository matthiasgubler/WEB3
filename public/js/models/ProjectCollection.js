class ProjectCollection {

    constructor(tag) {
        this.collection = [new Project('Projekt neue Frisur'), new Project('Projekt ibims')];
        if (tag) {
            this.riotjs_tag = tag;
        }
    }

    indexOfIdentifier(identifier) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i].identifier == identifier) {
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

    get() {
        return this.collection;
    }

    add(model) {
        this.collection.push(model);
    }

}