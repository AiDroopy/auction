import { Link } from "react-router-dom";


const LogOut = () => {

    return ( 

        <Link to="/">

            {sessionStorage.clear()}

        Log Out

        </Link>
        );
}
 
export default LogOut;