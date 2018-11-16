class ProjectCollection {

    constructor(tag) {
        this.collection = [];
        this.selected = null;
        if (tag) {
            this.riotjs_tag = tag;
        }
    }

    indexOfIdentifier(client_id) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i].client_id == client_id) {
                return i;
            }
        }
        return -1;
    }

    getByIdentifier(client_id) {
        let index = this.indexOfIdentifier(client_id);
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
    }

    storeSelectedProject() {
        localStorage.setItem("selectedProject", JSON.stringify(this.selected));
    }

    loadProjectCollection() {
        let lsProjectCollection = localStorage.getItem("projectCollection");
        if (lsProjectCollection != null) {
            this.collection = JSON.parse(lsProjectCollection);
        }
    }

    loadSelectedProject() {
        let lsProject = localStorage.getItem("selectedProject");
        if (lsProject != null) {
            this.selected = JSON.parse(lsProject);
        } else {
            this.selected = null;
        }

        return this.selected;
    }

}