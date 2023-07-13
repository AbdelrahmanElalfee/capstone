import Signup from "../../components/signup/Signup.component.jsx";
import {Outlet} from "react-router-dom";

import './Authentication.style.scss';
import Signin from "../../components/signin/Signin.component.jsx";

const AuthenticationPage = () => {
    return (
        <div className='authentication-container'>
            <Outlet/>
            <Signin />
            <Signup />
        </div>
    )
}

export default AuthenticationPage