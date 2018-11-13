class IssueCollection {
    constructor(tag) {
        this.collection = [];
        this.selected = this.collection[0];
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

    save(){
        localStorage.setItem("projects", JSON.stringify(this.collection));
    }

    load() {
        if(!(localStorage.getItem("projects") === null)) {
            this.collection = JSON.parse(localStorage.getItem("projects"));
        }
        this.selected = this.collection[0];
    }

    add(model) {
        this.collection.push(model);
        this.save();
    }

    clear(model){
        var index;
        for (var i = 0; i < this.collection.length; i++){
            if (this.collection[i].description == name){
                index = i;
            }
        }
        this.collection.splice(index, 1);
        if (this.collection.length > 0) {
            this.selected = this.collection[0];
        }
        else {
            this.selected = { description: "Leeres Projekt", issues: []}
        }
        this.save();
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
        this.save();
    }
}