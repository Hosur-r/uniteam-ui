import { NavigateFunction } from "react-router-dom"

export function TransitionHandler(navValue:string, navigate:NavigateFunction) {
    navigate(`${navValue}`)  
}