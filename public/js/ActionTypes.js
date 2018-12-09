const RESET = 'RESET';
const CHANGE_PROJECT = 'CHANGE_PROJECT';
const ADD_PROJECT = 'ADD_PROJECT';
const ADD_ISSUE = 'ADD_ISSUE';
const TOGGLE_ISSUE = 'TOGGLE_ISSUE';
const DELETE_ISSUE = 'DELETE_ISSUE';
const SYNC_ADD_PROJECT = 'SYNC_ADD_PROJECT';
const SYNC_OUTDATED_PROJECT = 'SYNC_OUTDATED_PROJECT';
const SYNC_RETRIEVE_PROJECT = 'SYNC_RETRIEVE_PROJECT';
const SYNC_RETRIEVE_ISSUES = 'SYNC_RETRIEVE_ISSUES';
const SYNC_ADD_ISSUE = 'SYNC_ADD_ISSUE';
const SYNC_CHANGE_ISSUE = 'SYNC_CHANGE_ISSUE';
const SYNC_DELETE_ISSUE = 'SYNC_DELETE_ISSUE';

function resetAction() {
    return {type: RESET}
}

function changeProjectAction(project_client_id) {
    return {type: CHANGE_PROJECT, project_client_id}
}

function addProjectAction(project) {
    return {type: ADD_PROJECT, project}
}

function outdateProjectAction(project_id) {
    return {type: SYNC_OUTDATED_PROJECT, project_id}
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

function syncAddProjectAction(project) {
    return {type: SYNC_ADD_PROJECT, project}
}

function syncRetrieveProjectAction(project_id, project) {
    return {type: SYNC_RETRIEVE_PROJECT, project_id, project}
}

function syncRetrieveIssuesAction(project_id, issues) {
    return {type: SYNC_RETRIEVE_ISSUES, project_id, issues}
}

function syncAddIssueAction(issue) {
    return {type: SYNC_ADD_ISSUE, issue}
}

function syncChangeIssueAction(issue) {
    return {type: SYNC_CHANGE_ISSUE, issue}
}

function syncDeleteIssueAction(issue_client_id) {
    return {type: SYNC_DELETE_ISSUE, issue_client_id}
}
