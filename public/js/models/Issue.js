class Issue {
    constructor(title, date, checked) {
        this.identifier = create_UUID().substr(0,4);
        console.log("asdfasfsdfasdf");
        this.title = title;
        this.date = date;
        this.checked = checked;
    }

    check() {
        this.checked = true;
    }

    uncheck() {
        this.checked = false;
    }
}