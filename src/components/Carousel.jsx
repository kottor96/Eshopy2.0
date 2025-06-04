export default function Carousel({car}) {
    
    

    return(
        <div id="carouselExampleDark" className="carousel carousel-dark slide ">
            <div className="carousel-indicators">
                {car.map((el,index)=>(
                    <button
                        key={el.id}
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={index}
                        className={index===0?'active':''}
                        aria-current={index===0?'true':''}
                        aria-label={`Slide ${index+1}`}
                    />
                ))}
            </div>
            <div className="carousel-inner">
                {car.map((el,index)=>(
                    <div key={el.id} className={`carousel-item ${index===0?'active':''}`} data-bs-interval={10000}>
                        <img src={el.image} className="d-block w-100" alt={el.title} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{el.title}</h5>
                            <p>{el.description} - <span className="prixCar">{el.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}