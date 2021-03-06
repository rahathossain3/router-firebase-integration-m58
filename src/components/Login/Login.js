import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
//from react-firebase-hooks
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

//auth call ing
const auth = getAuth(app);

const Login = () => {

    // //destructuring 
    // const { singInWithGoogle } = useFirebase();

    //from react-firebase-hooks
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);


    // for require page location 
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }


    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>

                {/* <button onClick={singInWithGoogle}>Google Sign In</button> */}
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>

            <form>
                <input type="email" name="" placeholder='Enter Email' />
                <br />
                <input type="password" name="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div >
    );
};

export default Login;