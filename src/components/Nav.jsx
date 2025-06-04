import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavBar({modif_filter,filter,categorie}) {
    const location = useLocation();
    const ver = location.pathname === "/product" 
    const filterMaj = filter.charAt(0).toUpperCase() + filter.slice(1)    

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Eshopy
                </span>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/product'}>
                                Produit
                            </NavLink>
                        </li>
                        {
                            ver?
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {filterMaj}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className={`dropdown-item ${filter==='tous'?'active':""}`} onClick={()=>modif_filter('tous')}>
                                            Tous
                                        </a>
                                    </li>
                                    {categorie.map((el,index)=>(
                                        <li key={index}>
                                            <a className={`dropdown-item ${filter===el?'active':""}`} onClick={()=>modif_filter(el)}>
                                                {el}
                                            </a>
                                        </li>
                                    ))}
                                    
                                    
                                </ul>
                                </li>
                            :
                            <></>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}