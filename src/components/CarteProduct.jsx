import { Link } from "react-router-dom";

export default function CarteProduct({el}) {
    
    
    
    
    
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={el.image} className="card-img-top" alt={el.title} style={{ height: "15rem"}}/>
            <div className="card-body">
                <div className="justify-content-between" >
                    <h5 className="card-title">{el.title}</h5>
                </div>
                <p className="card-text">
                    {el.description}
                </p>

                <div className="card-footer d-flex justify-content-between">
                    <Link to={`/Product/${el.id}`} className="btn btn-primary text-center align-self-center" >
                        Details
                    </Link>
                    <div>
                        <p className="m-0">{el.rating.rate}/5 ({el.rating.count})</p>
                        <p className="m-0">{el.price} €</p>
                    </div>
                </div>
            </div>
        </div>
    )
}