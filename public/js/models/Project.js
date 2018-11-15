class Project {
    constructor(title) {
        this.identifier = create_UUID();
        this.title = title;
        this.issueCollection = new IssueCollection();
    }

    add(issue) {
        this.issueCollection.push(issue);
        this.issueCollection.save()
    }

    remove(issue) {
        this.collection.pop(issue);
    }
}