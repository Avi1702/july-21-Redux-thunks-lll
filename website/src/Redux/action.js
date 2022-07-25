import { ERROR, LOADING, LOG_IN, SIGN_UP, SUCCESS } from "./actionType"


export const Signup=()=>{

    return{
        type:SIGN_UP
    }
}
export const LogIn=(payload)=>{

    return{
        type:LOG_IN,
        payload
    }
}
export const Loading=()=>{

    return{
        type:LOADING
    }
}
export const Success=()=>{

    return{
        type:SUCCESS
    }
}
export const Error=()=>{

    return{
        type:ERROR
    }
}