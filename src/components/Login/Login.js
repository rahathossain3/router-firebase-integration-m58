import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    //destructuring 
    const { singInWithGoogle } = useFirebase();

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>

            <form>
                <input type="email" name="" placeholder='Enter Email' />
                <br />
                <input type="password" name="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;