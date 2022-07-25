// import { Loading } from "../../../../july-19-Github-users-Redux/github-users-redux/src/Redux/actions"
import { ERROR, LOADING, LOG_IN, SIGN_UP, SUCCESS } from "./actionType"


const initialState={
    loading:"false",
    error:"false",
    token:null
}


export const reducer=(state=initialState,{type,payload})=>{

    switch(type){

        case SIGN_UP:
            return{
                ...state
            }

            case LOG_IN:
                return{
                    ...state,
                    token:payload
                }
            case LOADING:
                    return{
                        ...state,
                        loading:true
                    }
             case SUCCESS:
                        return{
                            ...state,
                            loading:false,
                            error:false
                        }  
                        case ERROR:
                            return{
                                ...state,
                                error:true,
                                loading:false
                            }
                         default:
                            return state
    }
}