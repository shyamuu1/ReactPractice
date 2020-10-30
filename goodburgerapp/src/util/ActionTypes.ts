
export interface httpActionResponse{
    type:"RESPONSE";
    responseData:any;
}
export interface httpActionSend{
    type:"SEND";
}
export interface httpActionError{
    type:"ERROR";
    errorMessage:string;
}

export type httpActionType = httpActionResponse|httpActionSend|httpActionError;