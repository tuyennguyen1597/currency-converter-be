import { ActionType } from "../action-type"

interface GetCurrenciesAction {
    type: ActionType.GET_CURRENCIES,
}

interface GetCurrenciesSuccessAction {
    type: ActionType.GET_CURRENCIES_SUCCESS,
    payload: string[]
}

interface GetCurrenciesErrorAction {
    type: ActionType.GET_CURRENCIES_ERROR,
    payload: string
}


export type Action = GetCurrenciesAction | GetCurrenciesSuccessAction | GetCurrenciesErrorAction;
