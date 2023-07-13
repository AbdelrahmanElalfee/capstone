import {Link, Outlet} from "react-router-dom";
import { useContext, Fragment } from "react";
import { UserContext } from '../../context/user.context.jsx';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import CrwnLogo from '../../assets/crown.svg';
import './Navigation.style.scss'
import {SignOutUser} from "../../utils/firebase/firebase.utils.js";


const Navigation = () => {

    const { currentUser} = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={CrwnLogo} alt='Logo' className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        HOME
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    {currentUser === null ? (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    ) : (
                        <>
                            <Link className='nav-link' to='/cart'>
                                <FavoriteTwoToneIcon />
                            </Link>
                            <Link className='nav-link' to='/cart'>
                                <ShoppingCartTwoToneIcon />
                            </Link>
                            <Link className='nav-link' to='/cart'>
                                <AccountCircleTwoToneIcon />
                            </Link>
                            <span className='nav-link' onClick={SignOutUser}>
                                <LoginTwoToneIcon />
                            </span>
                        </>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation