import HeaderLogo from "./logo";
import HeaderOptions from "./options";
import HeaderSearch from "./search";

export default function Header() {
    return (
        <header className="header w-full h-[4.5rem] flex items-center justify-between pl-[0.8125rem] pr-[0.8125rem] bg-dark-deep relative border-b-[0.0625rem] border-dark-slate border-solid">
            <HeaderLogo />

            <HeaderSearch />

            <HeaderOptions />
        </header>
    )
}