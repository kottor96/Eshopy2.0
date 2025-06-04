import Carousel from "../components/Carousel";
import CarteProduct from "../components/CarteProduct";

export default function Home({listeProduit,car}){
    


    return(
        <>
            {/* <section id="carousel">
                <Carousel car={car}/>
            </section> */}
            <section id="speProduc">
                <h2>Nos Produit de luxe</h2>
                <div id="luxe" className="listeProduit">
                        {listeProduit.length>0?(listeProduit.map(el=>(
                            <CarteProduct key={el.id} el={el} />
                        )))
                        : <p>chargement en cours</p>
                        }
                </div>
                
            </section>
        </>
    )
}