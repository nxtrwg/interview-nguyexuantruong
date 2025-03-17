export default function FilterOptions() {
    return (
        <div className="bg-dark-midnight border-[0.0625rem] rounded-[0.625rem] border-solid border-dark-slate p-[0.6875rem] flex items-center text-white basis-[9.1875rem] shrink-0">
            <div className="w-[1.125rem] h-[1.125rem]">
                <img className="w-full h-full" src="/images/icons/preferences 1.png" alt="Filter Options" />
            </div>
            <p className="text-[0.625rem] ml-1">Plus de filtre</p>
            <div className="ml-auto w-3 h-3">
                <img src="/images/icons/Arrow - Down 2 10.png" alt="Down" />
            </div>
        </div>
    )
}