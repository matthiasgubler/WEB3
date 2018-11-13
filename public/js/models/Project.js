class Project {
    constructor(title) {
        this.identifier = create_UUID();
        this.title = title;
        this.issueCollection = new IssueCollection();
    }

    add(issue) {
        this.collection.push(issue);
    }

    remove(issue) {
        this.collection.pop(issue);
    }
}