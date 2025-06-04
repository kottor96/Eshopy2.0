import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Notation from "../components/Notation";

export default function ProductDetail({listeProduit}){
    const {id} = useParams()
    const produit = listeProduit?.find(el=>el.id === parseInt(id))


    return(
        <>
            
            
            <section id="product_detaile">
                {produit?
                <div className="detail d-flex">
                    <div className="gauche"><img src={produit.image} alt={produit.title}/></div>
                    <div className=" droite">
                        <div className="head d-flex justify-content-between">
                            <h4>{produit.title}</h4>
                            <p className="text-xxl text-danger">{produit.price}€</p>
                        </div>
                        <div className="body">
                            <p>{produit.description}</p>
                        </div>
                        <div className="footer">
                            <p>{produit.rating.rate}/5<FontAwesomeIcon icon={faStar} className="text-warning" /> - vote : {produit.rating.count}</p>
                            <Notation/>
                        </div>
                    </div>
                </div>
                :
                <>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder w-75"></span>
                    <span className="placeholder" style={{width: "25%"}}></span>
                </>
                }
            </section>
        </>

    )
}