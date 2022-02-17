
import { ActionType, createCustomAction, getType } from "typesafe-actions";
import { Info } from "../../../models/info";

export interface InfoUser {
    infoUser?: Info;
}

export const setInfoUser = createCustomAction('info/setInfoUser', (data: Info) => ({
    data,
}));

const actions = { setInfoUser };

type Action = ActionType<typeof actions>

export default function reducer(state: InfoUser = {}, action: Action) {
    switch (action.type) {
        case getType(setInfoUser):

            return { ...state, infoUser: action.data };

        default:
            return state;
    }
}


