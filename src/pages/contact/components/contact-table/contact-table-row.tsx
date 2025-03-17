import Checkbox from "../../../../components/checkbox";

interface User {
    name: string;
    type: string;
    email: string;
    phone: string;
    opportunity: string;
    responsable: string;
    image: string;
    tags: string;
}

interface Props {
    data: User
}

export default function ContactTableRow({data}: Props ) {
    return (
        <tr className="h-[4.0625rem] table-row">
            <td className="table-cell">
                <Checkbox name="user" />
            </td>
            <td className="pl-8 text-left table-cell pr-8">
                <div>
                    <h4 className="text-xs font-bold">{data.name}</h4>
                    <p className="text-[0.75rem]">{data.type}</p>
                </div>
            </td>
            <td className="pl-[3.25rem] text-left table-cell pr-8">
                <div className="flex items-center gap-2">
                    <div className="w-[1.125rem] h-[1.125rem]">
                        <img src="/images/icons/Message.png" alt="Message" />
                    </div>
                    <p className="text-xs line-clamp-1">{data.email}</p>
                </div>
            </td>
            <td className="pl-[3.25rem] text-left table-cell pr-8">
                <div className="flex items-center gap-2">
                    <div className="w-[1.125rem] h-[1.125rem]">
                        <img src="/images/icons/Call.png" alt="Call" />
                    </div>
                    <p className="text-xs line-clamp-1">{data.phone}</p>
                </div>
            </td>
            <td className="pl-[3.25rem] text-left table-cell pr-8">
                <p className="text-xs line-clamp-1">{data.opportunity}</p>
            </td>
            <td className="pl-[3.25rem] text-left table-cell pr-8">
                <div className="flex items-center gap-1">
                    <div className="w-[1.125rem] h-[1.125rem] rounded-full overflow-hidden">
                        <img src={data.image} alt="Avatar" />
                    </div>
                    <p className="text-xs line-clamp-1">{data.responsable}</p>
                </div>
            </td>
            <td className="pl-[3.25rem] text-left table-cell">
                <div className="flex items-center gap-1">
                    <p className="px-1 text-[0.625rem] bg-accent-red rounded-full">{data.tags.split(",")[0]}</p>
                    <p className="px-1 text-[0.625rem] bg-accent-blue rounded-full">{data.tags.split(",")[1]}</p>
                    <p className="bg-black-200 rounded-full">{data.tags.split(",")[2]}</p>
                </div>
            </td>
            <td className="pl-[3.25rem] text-left table-cell table-action">
                <div className="flex items-center gap-2">
                    <div className="w-[1.125rem] h-[1.125rem] cursor-pointer">
                        <img src="/images/icons/Edit 1.png" alt="Avatar" />
                    </div>
                    <div className="w-[1.125rem] h-[1.125rem] cursor-pointer">
                        <img src="/images/icons/Delete 1.png" alt="Avatar" />
                    </div>
                </div>
            </td>
        </tr>
    )
}