import { useModal } from "../../components/modal/ModalProvider";
import ModalExport from "./components/contact-export";
import ModalList from "./components/contact-list";
import ContactSearch from "./components/contact-search";
import ContactSetting from "./components/contact-setting";
import ContactTable from "./components/contact-table";
import ContactTableNavigation from "./components/contact-table/contact-table-navigation";
import FilterOptions from "./components/filter-options";
import FilterUser from "./components/filter-user";
import { users } from "../../datas/user.ts"
import { useState } from "react";
import ModalLabel from "./components/contact-label/index.tsx";
import { labels } from "../../datas/labels.ts";
import { list } from "../../datas/list.ts";


export default function Contact() {
    const { openModal, closeModal } = useModal();

    const handleModalList = () => {
        openModal(<ModalList onClose={closeModal} list={list} />)
    }

    const handleModalLabel = () => {
        openModal(<ModalLabel onClose={closeModal} labels={labels} />)
    }

    const handleModalExport = () => {
        openModal(<ModalExport onClose={closeModal} />)
    }

    const handleModalImport = () => {
        openModal(<ModalList onClose={closeModal} list={list} />)
    }


    /** handle navigation */
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    // const itemsPerPage = 9;

    const totalItems = users.length
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = users.slice(startIndex, startIndex + itemsPerPage);

    const handleItemsPerPageChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement
        setItemsPerPage(Number(value));
        setCurrentPage(1);
    };
    /** end handle navigation */

    return (
        <>
            <div className="tabs flex text-white pl-[0.8125rem] border-b-[0.0625rem] border-b-gray-dark border-solid">
                <button className="tab px-[1.375rem] py-4 flex gap-1 active text-xs">
                    <div className="h-[1.125rem] w-[1.125rem]">
                        <img src="/images/icons/contacts 4.png" alt="Setting icon" />
                    </div>
                    <span>Contacts</span>
                </button>
                <button className="tab px-[1.375rem] py-4 flex gap-1 text-xs text-gray-light">
                    <div className="h-[1.125rem] w-[1.125rem]">
                        <img src="/images/icons/Tag 11.png" alt="Setting icon" />
                    </div>
                    <span>Étiquettes</span>
                </button>
                <button className="tab px-[1.375rem] py-4 flex gap-1 text-xs text-gray-light">
                    <div className="h-[1.125rem] w-[1.125rem]">
                        <img src="/images/icons/euro square.png" alt="Setting icon" />
                    </div>
                    <span>Opportunités</span>
                </button>
                <button className="tab px-[1.375rem] py-4 flex gap-1 text-xs text-gray-light">
                    <div className="h-[1.125rem] w-[1.125rem]">
                        <img src="/images/icons/Board tasks.png" alt="Setting icon" />
                    </div>
                    <span>Tâches</span>
                </button>
            </div>

            <div className="px-6 py-[1.75rem] w-full flex-1 flex flex-col">

                <div className="flex justify-between">
                    <div className="flex items-center gap-[1.375rem]">
                        <button className="px-[2.8125rem] pt-[0.6875rem] pb-[0.8125rem] bg-primary rounded-[0.625rem] text-white text-xs font-normal flex items-center gap-1">
                            <div className="h-[1.125rem] w-[1.125rem]">
                                <img src="/images/icons/Plus 1 1.png" alt="Setting icon" />
                            </div>
                            <span className="text-xs">Ajout de contact</span>
                        </button>
                        <p className="text-sm text-white"><span className="font-bold">100</span> Contacts</p>
                    </div>
                    <div className="flex gap-6 shrink-0 justify-end flex-1">
                        <FilterOptions />
                        <FilterUser />
                        <ContactSearch />
                        <ContactSetting onList={handleModalList} onLabel={handleModalLabel} onExport={handleModalExport} onImport={handleModalImport} />
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="mt-12 flex-1">
                        <ContactTable data={currentData} />
                    </div>

                    <ContactTableNavigation totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} onPerPageChange={handleItemsPerPageChange} itemsPerPage={itemsPerPage} totalItems={totalItems} />
                </div>
            </div>
        </>
    )
}