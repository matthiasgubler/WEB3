const CHANGE_PROJECT = 'CHANGE_PROJECT';
const ADD_PROJECT = 'ADD_PROJECT';
const ADD_ISSUE = 'ADD_ISSUE';
const TOGGLE_ISSUE = 'TOGGLE_ISSUE';
const DELETE_ISSUE = 'DELETE_ISSUE';

function changeProjectAction(project_client_id) {
    return {type: CHANGE_PROJECT, project_client_id}
}

function addProjectAction(project) {
    return {type: ADD_PROJECT, project}
}

function addIssueAction(issue) {
    return {type: ADD_ISSUE, issue}
}

function toggleIssueAction(issue_client_id) {
    return {type: TOGGLE_ISSUE, issue_client_id}
}

function deleteIssueAction(issue_client_id) {
    return {type: DELETE_ISSUE, issue_client_id}
}