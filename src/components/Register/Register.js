import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register now</h3>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" name="" placeholder='Enter Email' id="" />
                <br />
                <input type="password" name="" placeholder='Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;