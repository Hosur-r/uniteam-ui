import { NavigateFunction } from "react-router-dom"
import axios from "axios"
import { updateTokenUrl } from "./App/Urls"

export interface IAuthtokenInfo {
    exp:number,
    iat:number,
    id:string
}



export function TransitionHandler(navValue:string, navigate:NavigateFunction) {
    navigate(`${navValue}`)  
}


export function TokenUpdate(url:string){
    return axios.put(url,{
            "refresh": localStorage.getItem('refresh') 
        })
}


// получаем текущее время и округляем его 
export const getUnixTime = () => Math.round(+ new Date() / 1000)
// время при котором нужно обновлять токен
const LifeTimeToUpdate = 0.2


export const isTokenExpired = (token:string):boolean => {
    try{
        // получаем среднюю часть токена с информацией
        const tokenInfo = token?.split('.')[1]
        // расшифровываем полученную информацию
        const tokenInfoDecoded = window.atob(tokenInfo)
        // парсим её в переменные (когда он закончится(exp) && когда он выпустился(iat))
        const {exp, iat}: IAuthtokenInfo = JSON.parse(tokenInfoDecoded)


        // узнаём сколько осталось жить токену(вычитаем из времени окончания токена текущее время)
        const tokenLeftTime = exp - getUnixTime()
        // получаем время при котором его нужно обновлять (при токене в 15 минут здесь будет 720сек)
        const minLifeTimeForUpdate = (exp - iat) * LifeTimeToUpdate  


        // если время жизни токена меньше, чем время при котором его нужно обновить, то пора обновлять токен
            return tokenLeftTime < minLifeTimeForUpdate
        
    }catch(e){
        console.log('tokenExpiredEror');
        return false
    }
}



export const GetAccessToken = () => {
    try{
        const accessToken = localStorage.getItem('access')

        // если токена нет, или время его действия закончилось
        if(!accessToken || isTokenExpired(accessToken)){
             TokenUpdate(updateTokenUrl).then(data => {
                localStorage.setItem('access', data.data.token)  
                return data.data.token
            })
        }

         return localStorage.getItem('access')

    }catch{
        console.log('tokenUpdateEror')
        return false
    }
}

