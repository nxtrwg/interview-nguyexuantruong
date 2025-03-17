import Checkbox from "../../../../components/checkbox";
import Radio from "../../../../components/radio";

export default function ModalExport({onClose}: {onClose: () => void}) {
    return (
        <div className="box w-[51.375rem] h-[43.375rem] rounded-[0.625rem] bg-dark-midnight relative">
                <div className="w-[34.125rem] mx-auto mt-12 text-white">
                    <div className="header flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            Exporter les résultats
                        </h2>
                        <button className="w-6 h-6 " aria-label="Close box" onClick={onClose}>
                            <img className="w-full h-full" src="/images/icons/Close remove 2.png" alt="Close box" />
                        </button>
                    </div>

                    <div className="text-white pb-6 mt-[1.875rem] border-b-[0.0625rem] border-[#ffffff33] border-solid">
                        <h3 className="font-bold text-sm">Choisir un format pour l’exportation</h3>
                        <div className="mt-3">
                            <div className="flex gap-2 items-center">
                                <Radio name="format-export" title="XLSX (Excel)" />
                            </div>
                            <div className="flex gap-2 items-center mt-[0.375rem]">
                                <Radio name="format-export" title="CSV (valeurs séparées par des virgules)" />
                            </div>
                        </div>
                        <p className="text-[#A9ABAD] text-xs mt-4">Tous les 88 éléments seront exportés.</p>
                    </div>

                    <div className="text-white mt-6">
                        <h3 className="font-bold text-sm">Nom de l’exportation <span className="font-light">(facultatif)</span></h3>
                        <input type="text" placeholder="Nom de l’exportation (il s’agit du nom du fichier exporté)" className="w-full rounded-[0.625rem] bg-[#2E3745] p-3 placeholder:text-white placeholder:font-light placeholder:text-xs mt-2 text-xs" />
                    </div>

                    <div className="text-white pb-6 mt-6 border-b-[0.0625rem] border-[#ffffff33] border-solid">
                        <h3 className="font-bold text-sm">Sélectionnez les fichiers à exporter</h3>
                        <div className="mt-3">
                            <div className="flex gap-2 items-center">
                                <Checkbox name="" title="Champs par défaut" />
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                 <Checkbox name="" title="Champs par défaut" />
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                 <Checkbox name="" title="Champs par défaut" />
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                 <Checkbox name="" title="Champs par défaut" />
                            </div>
                            <div className="flex gap-2 items-center mt-1">
                                 <Checkbox name="" title="Champs par défaut" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-end gap-[1.625rem] mt-6">
                        <button className="text-sm">Exportation</button>
                        <button className="w-[12.6875rem] h-[3.75rem] bg-primary rounded-[0.625rem] flex justify-center items-center text-sm">Exportation</button>
                    </div>
                </div>
            </div>
    )
}