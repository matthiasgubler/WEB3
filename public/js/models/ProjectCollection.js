class ProjectCollection {
    constructor(tag) {
        this.collection = [new Project('Projekt neue Frisur'), new Issue('Projekt ibims')];
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