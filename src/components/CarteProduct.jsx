import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

export default function CarteProduct({el}) {
    const navigate = useNavigate()
    
    
    
    
    return(
        <div className="card" style={{ width: "18rem" }} onClick={()=>{navigate(`/Product/${el.id}`)}}>
            <img src={el.image} className="card-img-top" alt={el.title} style={{ height: "15rem"}}/>
            <div className="card-body">
                <div className="justify-content-between" >
                    <h5 className="card-title">{el.title}</h5>
                </div>

            </div>
            <div className="card-footer d-flex justify-content-between">
                
                <p className="m-0">{el.rating.rate}/5<FontAwesomeIcon icon={faStar} className="text-warning"/> ({el.rating.count})</p>
                <p className="m-0">{el.price} €</p>
            
            </div>
        </div>
    )
}