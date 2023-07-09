import { type } from "os"
import { ActionType } from "../action-type"
import { Action } from "../actions"

interface ConverterState {
    loading: boolean,
    error: string,
    data: string[]
}


const reducer = (state: ConverterState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_CURRENCIES:
            return { loading: false, error: null, data: [] };
        case ActionType.GET_CURRENCIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_CURRENCIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            break;
    }
}

export default reducer;