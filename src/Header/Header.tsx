import "./HeaderStyle.css"
import { SvgLogo } from "../media/svgIcons"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"
import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'

function Header(){

    const navigate = useNavigate()
    let style:string = "xs:max-sl:py-2 py-1 cursor-pointer nav"
    let activeStyle:string = "xs:max-sl:py-2 py-1 cursor-pointer active"

    return(
        <div className="py-2 border z-10 mb-16">
            <div className="flex items-center justify-around xs:max-sl:flex-col">
                <h1 className="flex items-center bigText cursor-pointer">{SvgLogo} UNIVERSITY.Inc</h1>
                <ul className="flex items-center xs:max-sl:flex-col px-4 sl:space-x-6 text">

                    <li className={window.location.pathname === "/Forms" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/Forms", navigate)}>
                        Формы
                    </li>
                    <li className={window.location.pathname === "/Courses" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/Courses", navigate)}>
                        Курсы
                    </li>
                    <li className={window.location.pathname === "/Profile" ? activeStyle : style} 
                    onClick={() => TransitionHandler("/Profile", navigate)}>
                        Личный кабинет
                    </li>

                </ul>
                <ArrowLeftOnRectangleIcon className="w-7 h-7 text-indigo-500 cursor-pointer opacity-75 hover:opacity-100 transition-all"/>
            </div>
        </div>
    )
}

export default Header
