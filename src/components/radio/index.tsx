interface RadioProps {
    name: string;
    title?: string;
}

export default function Radio({name, title=""}: RadioProps) {
    return (
        <label>
            <input type="radio" name={name} id="" className="radio" />
            <span className="checkmark"></span>
            <span className={`text-xs font-light ${!!title && "ml-1"}`}>{title}</span>
        </label>
    )
}