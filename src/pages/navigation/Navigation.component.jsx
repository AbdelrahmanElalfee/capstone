import {Link, Outlet} from "react-router-dom";
import { useContext, Fragment } from "react";
import { UserContext } from '../../context/user.context.jsx';
import { CartContext } from '../../context/cart.context.jsx';
import './Navigation.style.scss'
import {SignOutUser} from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/CartIcon.component.jsx";
import CrwnLogo from '../../assets/crown.svg';
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component.jsx";


const Navigation = () => {

    const { currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={CrwnLogo} alt='logo' className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser === null ? (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    ) : (
                        <>
                            <span className='nav-link' onClick={SignOutUser}>
                                SIGN OUT
                            </span>
                            <CartIcon />
                        </>
                    )}
                </div>
                { isCartOpen && <CartDropdown/> }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation