import { useNavigate } from "react-router"

export default function Sidebar() {

    const navigation = useNavigate()

    return (
        <aside className="sidebar w-12 h-full bg-dark-deep border-solid border-r-[0.0625rem] border-dark-slate">
            <nav className="sidebar-menu h-full">
                <ul className="menu-list flex flex-col items-center relative h-full">
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 6.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/2 User 1.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 8.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 7.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 13.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 12.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 9.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 13.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 15.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item active">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 16.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="w-[1.125rem] h-[1.125rem]">
                            <img className="w-full h-full" src="/images/icons/Group 17.png" alt="Menu Icon" />
                        </div>
                    </li>
                    <li className="menu-item !absolute bottom-0">
                        <div className="w-[1.125rem] h-[1.125rem]" onClick={()=>navigation("/login")}>
                            <img className="w-full h-full" src="/images/icons/Group 18.png" alt="Menu Icon" />
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}