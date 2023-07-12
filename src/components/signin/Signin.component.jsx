import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";
import {useState} from "react";
import FormInput from "../form-input/FormInput.components.jsx";
import Button from "../button/Button.component.jsx";

import './Signin.style.scss';

const fields = {
    'email': '',
    'password': ''
};

const Signin = () => {

    const logGoogleUser = async () => {
        const { user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const [formFields, setFormFields] = useState(fields);
    const { email, password} = formFields;

    const resetFields = () => {
        setFormFields(fields);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUserWithEmailAndPassword(email, password);
            resetFields();
        }catch (error){
            console.log(error);
        }
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit' children='Sign In'/>
                    <Button buttonType='google' children='Google sign in' onClick={logGoogleUser} type='button'/>
                </div>
            </form>
        </div>
    )
}

export default Signin;