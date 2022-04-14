import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {

    //custom hook
    // const { user } = useFirebase();


    const [user] = useAuthState(auth);


    return (
        <div>
            <h2>Knock Knock !  Who is their </h2>
            <h5>{user ? user.displayName : "Voooooot"}</h5>
        </div>
    );
};

export default Products;