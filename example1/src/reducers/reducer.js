
const initialState = {
    isLoading: false,
    err: {},
    data: []
}
export function startFetchData() {
    return { type: 'RUNNING' };
}

export function fetchSuccess(data) {
    return {
        type: 'OK',
        data: data
    };
}

export function fetchError(err) {
    return {
        type: 'ERROR',
        err: err
    };
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function loadApi(data) {
    return async dispatch => {
        await dispatch(startFetchData());
        await timeout(3000);
        await dispatch(fetchSuccess(data));
        await dispatch(fetchError({
            status: 500,
            message: 'NOT_FOUND'
        }));
    };
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RUNNING':
            return {
                ...state,
                isLoading: true,
                data: []
            }
        case 'OK':
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case 'ERROR':
            return {
                ...state,
                isLoading: false,
                err: action.err,
                data: []
            }
        default:
            return state
    }
}
