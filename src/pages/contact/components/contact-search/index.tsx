export default function ContactSearch() {
    return (
        <div className="bg-dark-midnight border-[0.0625rem] rounded-[0.625rem] border-solid border-dark-slate p-[0.6875rem] flex items-center text-white basis-[12.6875rem] shrink-0">
            <div className="w-[1.125rem] h-[1.125rem]">
                <img className="w-full h-full" src="/images/icons/Search 3.png" alt="Filter Options" />
            </div>
            <input className="text-[0.625rem] ml-1 placeholder:text-white w-full" placeholder="Titre, contact, responsable..." />
        </div>
    )
}