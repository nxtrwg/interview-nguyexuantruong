import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderSearch() {
    return (
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
    )
}