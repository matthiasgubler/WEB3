const apiURL = "http://zhaw-issue-tracker-api.herokuapp.com/api/";
const projectsAPI = apiURL + "projects";
const projectIdAPI = projectsAPI + "/{id}";
const issueAPI = projectsAPI + "issue";
const issueIdAPI = issueAPI + "/{id}";

store.subscribe(syncWithAPI)

function syncWithAPI(){
    let currentState = store.getState();
}


function api_saveProject(project) {
    let projectJSON = JSON.stringify(project);
    console.log(project);
    console.log(projectJSON);

    $.ajax({
        type: "POST",
        url: projectsAPI,
        contentType: "application/json",
        data: projectJSON,
        success: function (data) {
            //Und jetzt??
            project.id = date.id;

        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_updateProject(project) {
    let projectJSON = JSON.stringify(project);
    console.log(project);
    console.log(projectJSON);

    $.ajax({
        type: "PUT",
        url: projectIdAPI,
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

function api_retrieveProject(project) {
    let projectJSON = JSON.stringify(project);
    console.log(project);
    console.log(projectJSON);

    $.ajax({
        type: "GET",
        url: projectIdAPI,
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
    console.log(issue);
    console.log(issueJSON);

    $.ajax({
        type: "POST",
        url: issueAPI,
        contentType: "application/json",
        data: issueJSON,
        success: function (data) {
            issue.id = data.id;

        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}

function api_updateIssue(issue) {
    let issueJSON = JSON.stringify(issue);
    console.log(issue);
    console.log(issueJSON);

    $.ajax({
        type: "PUT",
        url: issueIdAPI,
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

function api_retrieveIssue(issue) {
    let issueJSON = JSON.stringify(issue);
    console.log(issue);
    console.log(issueJSON);

    $.ajax({
        type: "GET",
        url: issueAPI,
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
        url: issueIdAPI,
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