class Project {
    constructor(title) {
        this.identifier = create_UUID();
        this.title = title;
        this.issueCollection = new IssueCollection();
    }

    add(issue) {
        this.issueCollection.push(issue);
    }

    remove(issue) {
        this.collection.pop(issue);
    }
}