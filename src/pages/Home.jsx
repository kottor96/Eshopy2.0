import Carousel from "../components/Carousel";
import CarteProduct from "../components/CarteProduct";

export default function Home({listeProduit,car}){
    


    return(
        <>
            {/* <section id="carousel">
                <Carousel car={car}/>
            </section> */}
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