import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export default function AccordionCard({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="card px-4 py-2 border-b  border-b-slate-400 flex flex-col gap-4" >
            <div className="flex justify-between items-center cursor-pointer " onClick={()=> setIsOpen(prev=> !prev)}>
                <h1 className="text-lg font-bold">
                    {title}
                </h1>
                {
                    isOpen ?  <FontAwesomeIcon  className="text-red-800" icon={faMinus} />
                    : <FontAwesomeIcon className="text-red-800" icon={faPlus} /> 
                }
            </div>
            {
                isOpen && <div className="content">
                {content}
            </div>
            }
        </li>
    )
}