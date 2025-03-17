import Checkbox from "../../../../components/checkbox";
import ContactTableRow from "./contact-table-row";

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

interface TableProps {
    data: User[]
}

export default function ContactTable({ data }: TableProps) {
    return (
        <div className="table-wrapper py-6 bg-dark-deep rounded-[0.625rem] max-h-[42rem] overflow-y-auto">
            <table className="table text-white w-full">
                <thead className="text-gray text-xs font-normal">
                    <tr className="text-gray text-xs font-normal">
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pt-[0.1875rem] text-left">
                            <Checkbox name="user" />
                        </th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-8 pt-[0.1875rem] text-left">Nom du contact</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">Email</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">Téléphone</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">Intitulé de la formation</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">Responsable</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">Étiquettes</th>
                        <th className="table-th-cell text-gray text-xs font-normal pb-2 pl-[3.25rem] pt-[0.1875rem] text-left">
                            <div className="h-[0.125rem] w-[1.125rem]">
                                <img src="/images/icons/setting.png" alt="Setting icon" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => {
                            return(
                                <ContactTableRow data={user} key={`row-${index}`}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}