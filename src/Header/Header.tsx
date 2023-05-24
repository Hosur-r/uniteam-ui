import "./HeaderStyle.css"
import { SvgLogo, ExitIcon } from "../media/svgIcons"
import { TransitionHandler } from "../handlers"
import { useNavigate } from "react-router-dom"

function Header(){

    const navigate = useNavigate()
    let style:string = "xs:max-sl:py-2 py-1 cursor-pointer nav"
    let activeStyle:string = "xs:max-sl:py-2 py-1 cursor-pointer active"

    return(
        <div className="py-2 border  z-10">
            <div className="flex items-center justify-around xs:max-sl:flex-col">
                <h1 className="flex items-center bigText cursor-pointer">{SvgLogo} UNIVERSITY.Inc</h1>
                <ul className="flex items-center xs:max-sl:flex-col px-4 sl:space-x-6 text">

                    <li className={window.location.pathname === "/Forms" ? activeStyle : style} 
                    onClick={() => TransitionHandler("Forms", navigate)}>
                       Мои формы
                    </li>
                    <li className={window.location.pathname === "/Curces" ? activeStyle : style} 
                    onClick={() => TransitionHandler("Curces", navigate)}>
                        Курсы
                    </li>
                    <li className={window.location.pathname === "/PersonalArea" ? activeStyle : style} 
                    onClick={() => TransitionHandler("PersonalArea", navigate)}>
                        Личный кабинет
                    </li>

                </ul>
                <p className="xs:max-sl:pt-4 cursor-pointer">{ExitIcon}</p>
            </div>
        </div>
    )
}

export default Header
