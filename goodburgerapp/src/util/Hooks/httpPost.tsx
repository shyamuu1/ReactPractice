import {httpReducer} from "../../reducers/httpReducer";
import {useCallback, useReducer} from "react";
import { httpState } from "../types";

const initialState:httpState = {
    data:null,
    loading:false,
    error: null
}

const usePost = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer,initialState);
    const sendPostRequest = useCallback((url:string, reqBody:any) => {
        dispatchHttp({type:"SEND"});
        fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(reqBody)
        })
        .then(res => res.json())
        .then((response) => {
            dispatchHttp({type:"RESPONSE", responseData:response});
        })
        .catch(error => {
            dispatchHttp({type:"ERROR", errorMessage:error.message});
        })
    }, []);
    return {
        isloading:httpState.loading,
        data:httpState.data,
        sendPostRequest: sendPostRequest,
        error:httpState.error
    }
}

export default usePost;