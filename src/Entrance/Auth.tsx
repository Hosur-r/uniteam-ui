import { SvgLogo } from "../media/svgIcons"
import "./entraceStyle.css"
import { TransitionHandler } from "../handlers"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignIn } from "./req"
import { signInUrl } from "../App/Urls"

function Authorization(){

    const navigate:NavigateFunction = useNavigate()
    const[login, setLogin] = useState<string>('')
    const[psw, setPsw] = useState<string>('')

    return(
    <div>
        <div className="context z-10">
            <div className="flex justify-center text-center m-0 items-center h-[100vh]">
                <div className="w-96 h-96">
                    <h1 className="bigText flex items-center justify-center mb-8">{SvgLogo} UNIVERCITY.Inc</h1>

                        <div className="flex flex-wrap justify-center">

                            <input placeholder="Логин" 
                            onChange={event => {setLogin(event.target.value)}} value={login} name="name" type="text" autoComplete="on" 
                            className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            
                            <input placeholder="Пароль" 
                            onChange={event => {setPsw(event.target.value)}} value={psw}  name="password" type="password" autoComplete="on" 
                            className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        
                        </div>

                            <p className="smallText text-indigo-600 text-right cursor-pointer" onClick={() => TransitionHandler("pswF", navigate)}>Забыли пароль?</p>

                            <button type="submit" 
                                className="mt-8 mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-indigo-600"
                                    onClick={async() => {
                                        let req = await SignIn(signInUrl, login, psw).then(data => data)
                                        localStorage.setItem("access", req.data.access)
                                        if(req.status === 201){
                                            TransitionHandler("/profile", navigate)
                                        }else{
                                            TransitionHandler("/", navigate)
                                        }
                                    }}
                                >
                                    Войти
                             </button>
                                
                                <p className="mt-2 text-center text-sm text-gray-500">Нет аккаунта? <a href="" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" 
                                onClick={() => TransitionHandler("reg", navigate)}>Создать новый аккаунт</a></p>

                </div>
            </div>
        </div>
        <div className="area -z-30">
                <ul className="circles">
                    <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
                </ul>
        </div>
       
        </div>
    )
}

export default Authorization


