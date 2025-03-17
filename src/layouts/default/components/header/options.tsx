export default function HeaderOptions() {
    return (
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
    )
}