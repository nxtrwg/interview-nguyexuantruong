interface CheckboxProps {
    name: string;
    title?: string;
}

export default function Checkbox({name, title=""}: CheckboxProps) {
    return (
        <label>
            <input type="checkbox" name={name} id="" className="checkbox" />
            <span className="checkmark"></span>
            <span className={`text-xs font-light ${!!title && "ml-1"}`}>{title}</span>
        </label>
    )
}