class Issue {
    constructor(title, date, done, priority, project_id) {
        this.id = 0;
        this.client_id = create_UUID();
        this.project_id = project_id;
        this.title = title;
        this.date = date;
        this.done = done;
        this.priority = isNaN(parseInt(priority)) ? 3 : parseInt(priority);
        this.dirty = false;
        this.deleted = false;
    }
}
