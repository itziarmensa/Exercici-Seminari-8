import { useReducer } from "react"
import { Sub } from "../types"

interface FromState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value"
    payload:{
        inputName: string
        inputValue: string
    }
} | {
    type: "clear"
}

const INITIAL_STATE = {
    name:"",
    surname:"",
     subMonths: 0,
     avatar:"",
    description:"",
    money:0,
}

const formReducer = (state: FromState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload
            return{
                ... state,
                [inputName]: inputValue
    
            }
        case "clear":
            return INITIAL_STATE
        default:
            return state
    }
}

const useNewSubForm =() =>{
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm