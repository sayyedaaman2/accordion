import AccordionCard from "./AccordionCard";
import Data from '../data'
export default function Accordion(){
    return(
        <ul className="accordio border w-[720px] mx-auto   ">
            {
                Data.map((item,index) => <AccordionCard key={index} title={item.title} content={item.content} />)
            }
        </ul>
    )
}