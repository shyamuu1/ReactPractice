import { Food } from "./types";

export const sendGetRequest= async(url:string)=> {
    const response = await fetch(url, {
        method:"GET",
        headers: {"Content-Type":"application/json"}
    });
    const responseData = await response.json();
 
    return responseData;
}

export const sendPostRequest = async(url:string, reqBody:Food[]) => {
    const resp =  await fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(reqBody)
    });
    const resData = await resp.json();
    return resData;
}