import NavBar from "../components/nav";
import {Outlet} from 'react-router-dom'

export default function Layout(props){


    return(
        <>
            <NavBar {...props}/>
            <Outlet/>

        </>
        
    )
}