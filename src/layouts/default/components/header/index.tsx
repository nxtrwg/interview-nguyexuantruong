import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header className="header w-full h-[4.5rem] flex items-center justify-between pl-[0.8125rem] pr-[0.8125rem] bg-dark-deep relative border-b-[0.0625rem] border-dark-slate border-solid">
            <div className="logo w-[6.1875rem] h-[1.2rem]">
                <img className="w-full h-full object-contain" src="/images/dashboard.png" alt="Dashboard" />
            </div>

            <div className="flex items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[25.4375rem] h-[2.5rem] rounded-full bg-dark-charcoal px-4 py-3 flex items-center gap-2">
                    <div className="w-[1.125rem] h-[1.125rem]">
                        <img src="/images/icons/Search 3.png" alt="Search" />
                    </div>
                    <input type="text" placeholder="Rechercher dans Metaforma" className="text-xs text-white flex-1" />
                </div>
                <button className="w-[2.5rem] h-[2.5rem] bg-primary rounded-full flex justify-center items-center text-white">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>

            <div className="flex items-center gap-3">
                <button className="h-[1.125rem] w-[1.125rem]" aria-label="Notification">
                    <img className="w-full h-full object-cover" src="/images/icons/notice.png" alt="Notification" />
                </button>
                <button className="h-[1.125rem] w-[1.125rem]" aria-label="Message questions">
                    <img className="w-full h-full object-cover" src="/images/icons/questions.png" alt="Notification" />
                </button>
                <button className="h-[1.125rem] w-[1.125rem]" aria-label="Setting">
                    <img className="w-full h-full object-cover" src="/images/icons/setting.png" alt="Notification" />
                </button>
                <div className="flex items-center gap-[0.685rem] ">
                    <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                        <img className="object-cover w-full h-full" src="/images/avatar.avif" alt="Profile Picture" />
                    </div>
                    <div className="text-white">
                        <h4 className="text-xs font-bold">Sébastien Hanouna</h4>
                        <p className="text-[0.625rem]">CEO, Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}