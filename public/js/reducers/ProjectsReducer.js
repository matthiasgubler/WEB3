let initialState;

function initializeState() {
    let lsInitialState = localStorage.getItem("state");
    if (lsInitialState == null) {
        initialState = {
            currentProject: null,
            issues: [],
            projects: []
        }
    } else {
        initialState = JSON.parse(lsInitialState);
    }
}

function projectReducer(state = initialState, action) {

    switch (action.type) {
        //UI handled Actions
        case CHANGE_PROJECT:
            return handleChangeProject(state, action);
        case ADD_PROJECT:
            return handleAddProject(state, action);
        case ADD_ISSUE:
            return handleAddIssue(state, action);
        case TOGGLE_ISSUE:
            return handleToggleIssue(state, action);
        case DELETE_ISSUE:
            return handleDeleteIssue(state, action);

        //API handled "cleaning" Actions
        case SYNC_ADD_PROJECT:
            return handleSyncAddProject(state, action);
        case SYNC_RETRIEVE_PROJECT:
            return handleSyncRetrieveProject(state, action);
        case SYNC_RETRIEVE_ISSUES:
            return handleSyncRetrieveIssues(state, action);
        case SYNC_ADD_ISSUE:
            return handleSyncAddIssue(state, action);
        case SYNC_CHANGE_ISSUE:
            return handleSyncChangeIssue(state, action);
        case SYNC_DELETE_ISSUE:
            return handleDeletePhysicalIssue(state, action);
        default:
            return state
    }
}

function handleChangeProject(state, action) {
    return Object.assign({}, state, {
        currentProject: action.project_client_id
    });
}

function handleAddProject(state, action) {
    return {
        ...state,
        currentProject: action.project.client_id,
        projects: state.projects.concat(action.project)
    };
}

function handleAddIssue(state, action) {
    return Object.assign({}, state, {
        issues: state.issues.concat(action.issue),
        projects: state.projects.map(project => {
            if (action.issue.project_id !== project.client_id) {
                return project
            }
            return Object.assign({}, project, {
                    issues: state.issues.concat(action.issue.client_id)
                }
            )
        })
    })
}

function handleToggleIssue(state, action) {
    return Object.assign({}, state, {
        issues: state.issues.map(issue => {
            if (issue.client_id !== action.issue_client_id) {
                return issue
            }
            return Object.assign({}, issue, {
                    done: !issue.done,
                    dirty: true
                }
            )
        })
    })
}

function handleDeleteIssue(state, action) {
    return Object.assign({}, state, {
        issues: state.issues.map(issue => {
            if (issue.client_id !== action.issue_client_id) {
                return issue
            }
            return Object.assign({}, issue, {
                    deleted: true
                }
            )
        })
    })
}

function handleSyncAddProject(state, action) {
    return Object.assign({}, state, {
        projects: state.projects.map(project => {
            if (project.client_id !== action.project.client_id) {
                return project
            }
            return Object.assign({}, project, {
                    id: action.project.id,
                    created_at: !action.project.created_at,
                    updated_at: !action.project.updated_at,
                    dirty: false
                }
            )
        })
    })
}

function handleSyncRetrieveProject(state, action) {
    console.log("NOT YET IMPLEMENTED");
    return state;
}

function handleSyncRetrieveIssues(state, action) {
    console.log("NOT YET IMPLEMENTED");
    return state;
}

function handleSyncAddIssue(state, action) {
    return Object.assign({}, state, {
        issues: state.issues.map(issue => {
            if (issue.client_id !== action.issue.client_id) {
                return issue
            }
            return Object.assign({}, issue, {
                    id: action.issue.id,
                    created_at: !action.project.created_at,
                    updated_at: !action.project.updated_at,
                    dirty: false
                }
            )
        })
    });
}

function handleSyncChangeIssue(state, action) {
    return Object.assign({}, state, {
        issues: state.issues.map(issue => {
            if (issue.client_id !== action.issue.client_id) {
                return issue
            }
            return Object.assign({}, issue, {
                    dirty: false,
                    done: action.issue.done,
                    due_date: action.issue.due_date,
                    title: action.issue.title,
                    updated_at: action.issue.updated_at,
                    project_client_id: action.issue.project_client_id,
                    priority: action.issue.priority,
                    id: action.issue.id,
                    client_id: action.issue.client_id,
                    project_id: action.issue.project_id,
                    created_at: action.issue.created_at
                }
            )
        })
    });
}

function handleDeletePhysicalIssue(state, action) {
    let affectedIssue = state.issues.filter(issue => issue.client_id === action.issue_client_id);
    return Object.assign({}, state, {
        issues: [...state.issues.filter(issue => issue.client_id !== action.issue_client_id)],
        projects: state.projects.map(project => {
            if (project.client_id !== affectedIssue.project_id) {
                return project
            }
            return Object.assign({}, project, {
                    issues: [...state.issues.filter(issue => issue.client_id !== action.issue_client_id)]
                }
            )
        })
    });
}

