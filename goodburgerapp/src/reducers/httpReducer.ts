import {httpActionType} from "../util/ActionTypes";
import {httpState} from '../util/types';

export const httpReducer = (currentHttp:httpState, action:httpActionType) => {
    switch(action.type){
        case "SEND":
            return {
                ...currentHttp,
                data:null,
                loading: true,
                error:null
            };
        case "RESPONSE":
            return {
                ...currentHttp,
                data:action.responseData,
                loading:false,
                error: null
            };
        case "ERROR":
            return {
                ...currentHttp,
                lodaing:false,
                error: action.errorMessage
            }
        default:
            return currentHttp;
    }
}