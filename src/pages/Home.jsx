import Carousel from "../components/Carousel";
import CarteProduct from "../components/CarteProduct";

export default function Home({listeProduit,car}){
    


    return(
        <>
            {listeProduit
            ?<>
                <section id="carousel">
                    <Carousel car={car}/>
                </section>
                <section id="speProduc">
                    <h2 className="mb-5">Nos Produit de luxe</h2>
                    <div id="luxe" className="listeProduit">
                            {listeProduit.length>0?(listeProduit.map(el=>(
                                <CarteProduct key={el.id} el={el} />
                            )))
                            : <p>chargement en cours</p>
                            }
                    </div>
                    
                </section>
            </>
            :<>
                <section>
                    <>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk
                                of the card’s content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                        <div className="card" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6" />
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7" />
                                <span className="placeholder col-4" />
                                <span className="placeholder col-4" />
                                <span className="placeholder col-6" />
                                <span className="placeholder col-8" />
                            </p>
                            <a
                                className="btn btn-primary disabled placeholder col-6"
                                aria-disabled="true"
                            />
                            </div>
                        </div>
                    </>
                </section>
                <section>
                    <>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk
                                of the card’s content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                        <div className="card" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6" />
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7" />
                                <span className="placeholder col-4" />
                                <span className="placeholder col-4" />
                                <span className="placeholder col-6" />
                                <span className="placeholder col-8" />
                            </p>
                            <a
                                className="btn btn-primary disabled placeholder col-6"
                                aria-disabled="true"
                            />
                            </div>
                        </div>
                        </>

                </section>
            </>
            }
            
        </>
    )
}