class Project {
    constructor(title) {
        this.id = 0;
        this.client_id = create_UUID();
        this.title = title;
        this.issueCollection = new IssueCollection();
        this.activate = true;
    }
}