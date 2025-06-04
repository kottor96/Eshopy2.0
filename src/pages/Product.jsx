import CarteProduct from "../components/CarteProduct"

export default function Product({listeProduit}){

    return(
        <section id="product">
            
            <div id="listeProduit" className="listeProduit">
                {listeProduit.map(el=>(
                    <CarteProduct key={el.id} el={el}/>
                ))}
            </div>
        </section>
    )
}