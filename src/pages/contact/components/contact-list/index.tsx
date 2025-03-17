interface List {
    name: string;
    contact: number;
}

interface ListProps {
    onClose: () => void;
    list: List[]
}

export default function ModalList({ onClose, list }: ListProps) {
    return (
        <div className="box w-[51.375rem] h-[35.5625rem] rounded-[0.625rem] bg-dark-midnight relative">

            <button className="w-6 h-6 absolute right-0 top-0 mt-6 mr-6" aria-label="Close box" onClick={onClose}>
                <img className="w-full h-full" src="/images/icons/Close remove 2.png" alt="Close box" />
            </button>

            <div className="w-[34.125rem] mx-auto mt-12 text-white">
                <div className="header flex items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-[1.125rem] h-1.125rem">
                            <img className="w-full h-full" src="/images/icons/Bulleted list.png" alt="List" />
                        </div>
                        <h2 className="text-2xl font-bold">
                            Liste <br />de contact
                        </h2>
                    </div>
                    <div className="flex gap-3 ml-auto shrink-0">
                        <button className="flex gap-1 h-10 w-[9.75rem]  rounded-[0.625rem] bg-[#232B39] items-center justify-start pl-3 shrink-0">
                            <div className="w-[1.125rem] h-[1.125rem]">
                                <img className="w-full h-full" src="/images/icons/Search 3.png" alt="List" />
                            </div>
                            <span className="text-xs font-normal">Recherche</span>
                        </button>
                        <button className="flex gap-1 h-10 w-[12.75rem] rounded-[0.625rem] bg-primary items-center justify-center">
                            <div className="w-[1.125rem] h-[1.125rem]">
                                <img className="w-full h-full" src="/images/icons/Plus 1 1.png" alt="List" />
                            </div>
                            <span className="text-xs font-normal">Ajouter une liste</span>
                        </button>
                    </div>
                </div>

                <div>
                    <table className="w-full mt-[1.3125rem]">
                        <thead className=" text-[#8B8B8B] text-xs font-normal">
                            <tr className="text-left border-b-[0.0625rem] border-[#ffffff30] border-solid">
                                <th className="pb-2">Nom de la liste</th>
                                <th className="pb-2">Contact</th>
                                <th className="pb-2 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="text-white text-xs font-bold">
                            {
                                list.map((item, index) => {
                                    return (
                                        <tr className=" border-b-[0.0625rem] border-[#ffffff30] border-solid" key={`list-${index}`}>
                                            <td className="pt-[1.5625rem] pb-[1.4375rem] text-xs">{item.name}</td>
                                            <td className="pt-[1.5625rem] pb-[1.4375rem] text-xs">{item.contact}</td>
                                            <td className="pt-[1.5625rem] pb-[1.4375rem]">
                                                <div className="flex items-center justify-end gap-2">
                                                    <div className="w-[1.125rem] h-[1.125rem]">
                                                        <img src="/images/icons/Edit 1.png" alt="Avatar" />
                                                    </div>
                                                    <div className="w-[1.125rem] h-[1.125rem]">
                                                        <img src="/images/icons/Delete 1.png" alt="Avatar" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}