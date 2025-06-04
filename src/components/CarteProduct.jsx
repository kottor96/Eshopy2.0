import { Link } from "react-router-dom";

export default function CarteProduct({el}) {
    
    
    
    
    
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={el.image} className="card-img-top" alt={el.title} />
            <div className="card-body">
                <div className="d-flex justify-content-between p-1" >
                    <h5 className="card-title">{el.title}</h5>
                    <p>{el.price} €</p>
                </div>
                <p className="card-text">
                    {el.description}
                </p>

                <Link to={`/Product/${el.id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>

    )
}