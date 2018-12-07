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

function persistState(){

}

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROJECT:
            return handleChangeProject(state, action);
        case ADD_PROJECT:
            return handleAddProject(state, action);
        case ADD_ISSUE:
            return handleAddIssue(state, action);
        case TOGGLE_ISSUE:
            return handleToggleIssue(state, action);
        case DELETE_ISSUE:
            return handleDeleteProject(state, action);
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
                    done: !issue.done
                }
            )
        })
    })
}

function handleDeleteProject(state, action) {
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

