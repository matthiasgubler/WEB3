class Issue {
    constructor(title, date, checked, priority) {
        this.client_id = create_UUID();
        this.title = title;
        this.date = date;
        this.checked = checked;
        this.priority = isNaN(parseInt(priority)) ? 3 : parseInt(priority);
    }

    check() {
        this.checked = true;
    }

    uncheck() {
        this.checked = false;
    }
}