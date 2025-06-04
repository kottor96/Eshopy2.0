import { useParams } from "react-router-dom"

export default function ProductDetail({listeProduit}){
    const {id} = useParams()
    const produit = listeProduit.find(el=>el.id === parseInt(id))


    return(
        <>
            <section id="product_detaile">
                <div className="detail d-flex">
                    <div className="flex-grow-1"><img src={produit.image} alt={produit.title}/></div>
                    <div className="flex-grow-2 droite">
                        <div className="head d-flex justify-content-between">
                            <h4>{produit.title}</h4>
                            <p>{produit.price} €</p>
                        </div>
                        <div className="body">
                            <p>{produit.description}</p>
                        </div>
                        <div className="footer">
                            <p>{produit.rating.rate}/5 - vote :{produit.rating.count}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}