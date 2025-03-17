interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onPerPageChange : (e: React.MouseEvent<HTMLInputElement>) => void;
    itemsPerPage: number;
    // startIndex: number;
    // endIndex: number;
    totalItems: number;
}

export default function ContactTableNavigation({ totalPages, currentPage, onPageChange, onPerPageChange, itemsPerPage, totalItems }: PaginationProps) {
    const handlePageClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage < totalItems ? startIndex + itemsPerPage : totalItems;
    
    return (
        <div className="text-gray-light text-xs flex items-center w-full mt-[1.3125rem] relative">
            <div className="flex items-center ml-[7.125rem] text-xs">
                <span className="text-xs">Éléments par page</span>
                <div className="flex grow-0 shrink-0 items-center rounded-[0.625rem] bg-dark border-[0.0625rem] border-solid border-dark-slate h-8 p-2 ml-2 mr-3 relative items-per-page-wrapper">
                    <div className="mr-1 text-xs relative">
                        <span className="text-xs">{itemsPerPage}</span>
                    </div>
                    <div className="h-3 w-3">
                        <img className="w-full h-full" src="/images/icons/Arrow - Down 2 10.png" alt="Down" />
                    </div>
                    <div className="absolute top-0 right-0 w-full items-per-page rounded-md border-dark-slate border-[0.0625rem] border-solid overflow-hidden -translate-y-full">
                        <ul className="flex flex-col">
                            <li>
                                <input type="number" value={6} className="row-per-page cursor-pointer p-1 hover:bg-dark-slate w-full text-xs" readOnly onClick={(e)=>onPerPageChange(e)}/>
                            </li>
                            <li>
                                <input type="number" value={9} className="row-per-page cursor-pointer p-1 hover:bg-dark-slate w-full text-xs" readOnly onClick={(e)=>onPerPageChange(e)}/>
                            </li>
                            <li>
                                <input type="number" value={18} className="row-per-page cursor-pointer p-1 hover:bg-dark-slate w-full text-xs" readOnly onClick={(e)=>onPerPageChange(e)}/>
                            </li>
                            <li>
                                <input type="number" value={24} className="row-per-page cursor-pointer p-1 hover:bg-dark-slate w-full text-xs" readOnly onClick={(e)=>onPerPageChange(e)}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="text-xs">{startIndex}-{endIndex} sur {totalItems} éléments</span>
            </div>

            <div className="flex gap-2 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-3 w-3 ml-2 mr-3 cursor-pointer" onClick={() => handlePageClick(1)}>
                    <img className="w-full h-full" src="/images/icons/Left 1.png" alt="Navigation control" />
                </div>
                <div className="h-3 w-3 ml-2 mr-3 cursor-pointer" onClick={() => handlePageClick(currentPage - 1)}>
                    <img className="w-full h-full" src="/images/icons/Left 3.png" alt="Navigation control" />
                </div>
                <div className="flex gap-2 items-center text-xs">
                    <div className="flex grow-0 shrink-0 items-center rounded-[0.625rem] bg-dark border-[0.0625rem] border-solid border-dark-slate h-8 p-2">
                        <span className="text-xs text-white">{currentPage < 10 ? "0" + currentPage : currentPage}</span>
                    </div>
                    <span className="text-xs">de {totalPages}</span>
                </div>
                <div className="h-3 w-3 ml-2 mr-3 cursor-pointer" onClick={() => handlePageClick(currentPage + 1)} >
                    <img className="w-full h-full" src="/images/icons/Left 5.png" alt="Navigation control" />
                </div>
                <div className="h-3 w-3 ml-2 mr-3 cursor-pointer" onClick={() => handlePageClick(totalPages)}>
                    <img className="w-full h-full" src="/images/icons/Left 4.png" alt="Navigation control" />
                </div>
            </div>
        </div>
    )
}