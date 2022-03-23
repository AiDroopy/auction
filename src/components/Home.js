import TestCont from "./TestCont";
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm";

const Home = () => {
    return ( 
    <div className="home">
        <div>
            <SignUpForm />

        </div>
        <div className="login">
            <LoginForm />
        </div>
    </div> );
}
 
export default Home;