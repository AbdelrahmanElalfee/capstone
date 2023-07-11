/*
1- inverted button
2- default button
3- google button
 */
import './Button.style.scss';

const CLASSES_TYPES = {
    google : 'google-sign-in',
    inverted : 'inverted'
};
const Button = ({children, buttonType, ...otherProps}) => {
    return (
    <button
        className={`button-container ${CLASSES_TYPES[buttonType]}`}
        {...otherProps}
    >
        {children}
    </button>)
}

export default Button;