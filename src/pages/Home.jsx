import Carousel from "../components/Caouresel";
import CarteProduct from "../components/CarteProduct";

export default function Home({listeProduit}){
    


    return(
        <>
            <section id="carousel">
                <Carousel/>
            </section>
            <section id="speProduc">
                {listeProduit.length>0?(listeProduit.map(el=>(
                    <CarteProduct key={el.id} el={el} />
                )))
                : <p>chargement en cours</p>
                }
            </section>
        </>
    )
}