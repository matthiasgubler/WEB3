class ProjectCollection {

    constructor(tag) {
        this.collection = [];
        this.selected = null;
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

    setSelectedProject(selected){
        this.selected = selected;
        this.storeSelectedProject();
    }

    get() {
        return this.collection;
    }

    add(model) {
        this.collection.push(model);
    }

    storeProjectCollection() {
        localStorage.setItem("projectCollection", JSON.stringify(this.collection));
        console.log("Store ProjectCollection");
        console.log(localStorage);
    }

    storeSelectedProject() {
        localStorage.setItem("selectedProject", JSON.stringify(this.selected));
    }

    loadProjectCollection() {
        let lsProjectCollection = localStorage.getItem("projectCollection");
        if (!(lsProjectCollection == null)) {
            this.collection = JSON.parse(lsProjectCollection);
        }
    }

    loadSelectedProject() {
        let lsProject = localStorage.getItem("selectedProject");
        if (!(lsProject == null)) {
            this.selected = JSON.parse(localStorage.getItem("lsProject"));
        } else {
            this.selected = null;
        }
        return this.selected;
    }

}