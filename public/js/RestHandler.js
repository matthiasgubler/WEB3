const apiURL = "https://zhaw-issue-tracker-api.herokuapp.com/api/";
const projectsAPI = apiURL + "projects";
const param_project_id = "{project_id}"
const projectIdAPI = projectsAPI + "/" + param_project_id;
const issueAPI = projectIdAPI + "/issues";
const param_issue_id = "{issue_id}"
const issueIdAPI = issueAPI + "/" + param_issue_id;

function syncWithAPI() {
    let currentState = store.getState();

    syncNewProjects(currentState.projects);
    syncNewIssues(currentState.issues);
    syncDirtyIssues(currentState.issues);
    syncDeletedIssues(currentState.issues);
}

function syncNewProjects(projects) {
    let noIdProjects = projects.filter(project => project.id === 0);
    noIdProjects.forEach(noIdProject => api_saveProject(noIdProject));
}

function syncNewIssues(issues) {
    let newIssues = issues.filter(issue => issue.id === 0 && issue.project_id !== 0);
    newIssues.forEach(newIssue => api_saveIssue(newIssue));
}

function syncDirtyIssues(issues) {
    let dirtyIssues = issues.filter(issue => issue.dirty && issue.id !== 0 && issue.project_id !== 0);
    dirtyIssues.forEach(dirtyIssue => api_updateIssue(dirtyIssue));
}

function syncDeletedIssues(issues) {
    let deletedIssues = issues.filter(issue => issue.deleted && issue.id !== 0 && issue.project_id !== 0);
    deletedIssues.forEach(deletedIssue => api_deleteIssue(deletedIssue));
}

function api_saveProject(project) {
    let projectJSON = JSON.stringify(project);

    $.ajax({
        type: "POST",
        url: projectsAPI,
        contentType: "application/json",
        data: projectJSON,
        success: function (data) {
            store.dispatch(syncAddProjectAction(data));
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_retrieveProject(project) {
    let projectJSON = JSON.stringify(project);
    console.log(project);
    console.log(projectJSON);

    $.ajax({
        type: "GET",
        url: projectIdAPI.replace(param_project_id, project.id),
        contentType: "application/json",
        data: projectJSON,
        success: function (data) {
            //Und jetzt??

        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_saveIssue(issue) {
    let issueJSON = JSON.stringify(issue);

    $.ajax({
        type: "POST",
        url: issueAPI.replace(param_project_id, issue.project_id),
        contentType: "application/json",
        data: issueJSON,
        success: function (data) {
            store.dispatch(syncAddIssueAction(data));
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_updateIssue(issue) {
    let issueJSON = JSON.stringify(Object.assign(new Issue(), issue));

    $.ajax({
        type: "PUT",
        url: issueIdAPI.replace(param_project_id, issue.project_id).replace(param_issue_id, issue.id),
        contentType: "application/json",
        data: issueJSON,
        success: function (data) {
            store.dispatch(syncChangeIssueAction(data));
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_retrieveIssue(issue) {
    let issueJSON = JSON.stringify(issue);
    console.log(issue);
    console.log(issueJSON);

    $.ajax({
        type: "GET",
        url: issueAPI.replace(param_project_id, issue.project_id),
        contentType: "application/json",
        data: issueJSON,
        success: function (data) {

        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_deleteIssue(issue) {
    let issueJSON = JSON.stringify(issue);
    console.log(issue);
    console.log(issueJSON);

    $.ajax({
        type: "DELETE",
        url: issueIdAPI.replace(param_project_id, issue.project_id).replace(param_issue_id, issue.id),
        contentType: "application/json",
        data: issueJSON,
        success: function (data) {
            store.dispatch(syncDeleteIssueAction(issue.client_id));
        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}