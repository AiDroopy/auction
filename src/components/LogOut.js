import { Link } from "react-router-dom";


const LogOut = () => {

    return ( 
        <button>
        <Link to="/">

            {sessionStorage.clear()}

        Log Out

        </Link></button>
        );
}
 
export default LogOut;