class Issue {
    constructor(title, date, checked, priority) {
        this.identifier = create_UUID().substr(0,4);
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