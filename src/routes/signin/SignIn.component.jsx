import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import Signup from "../../components/signup/Signup.component.jsx";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <Signup />
        </div>
    )
}

export default SignIn