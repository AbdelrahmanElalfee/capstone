import {
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";
import { useState, useContext } from "react";
import FormInput from "../form-input/FormInput.components.jsx";
import Button from "../button/Button.component.jsx";
import { UserContext } from "../../context/user.context.jsx";

import './Signin.style.scss';

const fields = {
    'email': '',
    'password': ''
};

const Signin = () => {

    const [formFields, setFormFields] = useState(fields);
    const { email, password} = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

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
            const {user} = await signInUserWithEmailAndPassword(email, password);
            resetFields();
            setCurrentUser(user);
        }catch (error){
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
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