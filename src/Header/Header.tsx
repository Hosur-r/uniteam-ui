import "./HeaderStyle.css"
import { SvgLogo } from "../media/svgIcons"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

function Header(){

    const navigate = useNavigate()
    let style:string = "xs:max-sl:py-2 py-1 cursor-pointer nav"
    let activeStyle:string = "xs:max-sl:py-2 py-1 cursor-pointer active"

    return(
        <div className="py-2 border z-10 mb-16">
            <div className="flex items-center justify-around xs:max-sl:flex-col">
                <h1 className="flex items-center bigText cursor-pointer">{SvgLogo} UNIVERSITY.Inc</h1>
                <ul className="flex items-center xs:max-sl:flex-col px-4 sl:space-x-6 text">

                    <li className={window.location.pathname === "/forms" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/forms", navigate)}>
                        Формы
                    </li>
                    <li className={window.location.pathname === "/courses" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/courses", navigate)}>
                        Курсы
                    </li>
                    <li className={window.location.pathname === "/profile" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/profile", navigate)}>
                        Личный кабинет
                    </li>

                </ul>
                <ArrowLeftOnRectangleIcon 
                className="w-7 h-7 text-indigo-500 cursor-pointer opacity-75 hover:opacity-100 transition-all"
                onClick={() => {
                    TransitionHandler('/', navigate)
                    localStorage.removeItem('access')
                }}
                />
            </div>
        </div>
    )
}

export default Header
