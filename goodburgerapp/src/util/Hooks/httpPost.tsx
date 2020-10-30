import {httpReducer} from "../../reducers/httpReducer";
import {useCallback, useReducer} from "react";
import { httpState } from "../types";

const initialState:httpState = {
    data:null,
    loading:false,
    error: null
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer,initialState);

    const sendGetRequest = useCallback((url:string) => {
        dispatchHttp({type:"SEND"})
        fetch(url, {
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(resp => {
            dispatchHttp({type:"RESPONSE", responseData:resp})
        })
        .catch(err => {
            dispatchHttp({type:"ERROR", errorMessage:err.message})
        })
    },[]);
    
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
        sendGetRequest:sendGetRequest,
        sendPostRequest: sendPostRequest,
        error:httpState.error
    }
}

export default useHttp;