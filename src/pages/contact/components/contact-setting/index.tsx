import { useState } from "react"

interface SettingProps {
    onList: () => void;
    onLabel: () => void;
    onExport: () => void;
    onImport: () => void;
}

export default function ContactSetting({onList, onLabel, onExport, onImport}: SettingProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickSetting = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="relative">
            <div className={`w-[2.5rem] h-[2.625rem] rounded-[0.625rem] border-[0.0625rem] border-dark-slate border-solid bg-dark-midnight flex items-center justify-center cursor-pointer ${isOpen && "!bg-dark-deep border-primary"}`} onClick={handleClickSetting}>
                <img src="/images/icons/setting.png" alt="Setting" />
            </div>
            <div className={`min-w-[12.75rem] w-full bg-dark-midnight border-[0.0625rem] border-dark-navy border-solid rounded-[0.625rem] p-4 absolute bottom-0 right-0 -mb-2 translate-y-full ${isOpen ? "block" : "hidden"}`}>
                <nav className="text-[0.625rem] text-white">
                    <ul className="flex flex-col gap-2">
                        <li className="text-[0.625rem] line-clamp-1 cursor-pointer hover:underline" onClick={onList}>Créer / Editer une Liste</li>
                        <li className="text-[0.625rem] line-clamp-1 cursor-pointer hover:underline" onClick={onLabel}>Créer / Editer une Etiquette</li>
                        <li className="text-[0.625rem] line-clamp-1 cursor-pointer hover:underline" onClick={onExport}>Exporter les résultats du filtre au format CSV pour une analyse plus approfondie.</li>
                        <li className="text-[0.625rem] line-clamp-1 cursor-pointer hover:underline" onClick={onImport}>Importer des données</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}