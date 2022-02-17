import { FETCH_USERS_REQUEST } from "./userTypes";

const initState = {
    loading: true,
    data: [],
    error: '',
}

const userReducer = (state = initState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                users: action.payload,
                error: '',
            }

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                users: [],
                error: action.payload,
            }

        default: return state;
    }
};

export default userReducer