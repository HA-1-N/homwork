import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

export const fetchUserSuccess = (users: any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

export const fetchUserFailure = (error: any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};