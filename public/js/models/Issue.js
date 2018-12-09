class Issue {

    constructor(title, due_date, done, priority, project_client_id, project_id) {
        this.id = 0;
        this.client_id = create_UUID();
        this.project_id = project_id;
        this.project_client_id = project_client_id;
        this.title = title;
        this.due_date = due_date != null && due_date !== '' ? this.parseSwissDateStringToDate(due_date) : new Date();
        this.done = done;
        this.priority = isNaN(parseInt(priority)) ? 3 : parseInt(priority);
        this.dirty = false;
        this.deleted = false;
    }

    toJSON() {
        return {
            id: this.id,
            client_id: this.client_id,
            project_id: this.project_id,
            project_client_id: this.project_client_id,
            title: this.title,
            due_date: this.due_date,
            done: this.done,
            priority: this.priority.toString()
        };
    };

    parseSwissDateStringToDate(dateString) {
        let parts = dateString.split('.');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
}
