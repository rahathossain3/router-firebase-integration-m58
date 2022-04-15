import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
// from react-firebase-hooks/auth
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css';


const auth = getAuth()

const Header = () => {
    // call custom hook data
    // const { user, handleSignOut } = useFirebase();


    const [user] = useAuthState(auth)

    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>

                {
                    user &&
                    <>
                        <Link to='/vip'> VIP</Link>
                    </>
                }


                <span> {user?.displayName && user.displayName}</span>

                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;