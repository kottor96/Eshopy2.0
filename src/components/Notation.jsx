import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


const star = [1,2,3,4,5]

export default function Notation() {
    const [active,setActive] = useState(0)
    const [selected, setSelected] = useState(0); 


    return(
        <div className="d-flex justify-content-start" onMouseOut={()=>setActive(0)}>
            {star.map(el=>(
                <FontAwesomeIcon icon={faStar} key={el} className={el <= (active || selected)? "text-warning" : "text-body-tertiary"} onClick={()=>(selected===0 ? setSelected(el):null)} onMouseEnter={()=>{setActive(el)}}/>
            ))}
        </div>
    )
}