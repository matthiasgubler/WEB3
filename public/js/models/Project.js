class Project {
    constructor(title) {
        this.identifier = create_UUID().substr(0,4);
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