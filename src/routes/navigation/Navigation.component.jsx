import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";

import CrwnLogo from '../../assets/crown.svg';
import CartLogo from '../../assets/shopping-bag.svg';
import './Navigation.style.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={CrwnLogo} alt='Logo' className='logo'/>
                </Link>
                <div className='links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link><Link className='nav-link' to='/signin'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation