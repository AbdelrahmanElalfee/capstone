import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';
import { UserContext } from "../../context/user.context.jsx";

import FormInput from "../form-input/FormInput.components.jsx";
import Button from "../button/Button.component.jsx";

import './Signup.style.scss';

const fields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirm_password': ''
};

const Signup = () => {

    const [formFields, setFormFields] = useState(fields);
    const {displayName, email, password, confirm_password} = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const resetFields = () => {
        setFormFields(fields);
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirm_password) {
            alert("Passwords doesn't match.")
            return;
        }
        try {
            const {user} =
                await createAuthUserWithEmailAndPassword(email, password);
            const res =
                await createUserDocumentFromAuth(user, {'displayName': displayName });

            resetFields();
            setCurrentUser(user);
        }catch (error){
            console.log(error);
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirm_password'
                    value={confirm_password}
                />
                <Button type='submit' children='Sign Up'/>
            </form>
        </div>
    )
}

export default Signup;