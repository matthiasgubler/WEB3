class Project {
    constructor(title) {
        this.identifier = create_UUID();
        this.title = title;
        this.issueCollection = new IssueCollection();
    }
}