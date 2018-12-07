const apiURL = "http://zhaw-issue-tracker-api.herokuapp.com/api/";
const projectsAPI = apiURL + "projects";
const projectIdAPI = projectsAPI + "/{id}";

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

        },
        error: function (data) {
            console.log("error");
            console.log(data);
        },
        dataType: 'json'
    });
}