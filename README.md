## Video 1
	58-1 Module Introduction and Basic Project Setup


React router add, firebase add,

Project initialize 


## Video 2
	58-2 Create Use Firebase hook for shared authentication

Destructuring er object use kora valo

## Video 3
	58-3 Add Google Sign using custom hook with on State Change

import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from "../firebase.init";
 
const auth = getAuth(app);
 
// google provider
const googleProvider = new GoogleAuthProvider();
 
 
const useFirebase = () => {
    const [user, setUser] = useState({});
 
    // for google
    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }
 
    // return [user, setUser];
    return {
        user,
        singInWithGoogle
    }
 
}
 
export default useFirebase;


## Video 4
58-4 Implement Sign out and display user logged in User name

// for user state change
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    //sign out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { });
    }
 


Optional chaining 

 
 <span> {user?.displayName && user.displayName}</span>
 
 {
   user?.uid
   ?
   <button onClick={handleSignOut}>Sign Out</button>
   :
    <Link to="/login">Login</Link>
      }


https://github.com/CSFrequency/react-firebase-hooks

Install it:
npm install --save react-firebase-hooks



## Video 5
58-5 Explore and Install React Firebase Hooks

React Firebase Hooks install
npm install --save react-firebase-hooks


## Video 6
	58-6 Use React Firebase Hook to manage user authentication


Login.js

import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
 
//auth call ing
const auth = getAuth(app);
 


import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

    //from react-firebase-hooks
   const [signInWithGoogle, user] = useSignInWithGoogle(auth);
 


    <button onClick={() => signInWithGoogle()}>Google Sign In</button>


Header.js

    const auth = getAuth()
    const [user] = useAuthState(auth)


  <button onClick={() => signOut(auth)}>Sign Out</button>

Home.js

    const auth = getAuth(app);
    const [user] = useAuthState(auth);



## Video 7
58-7 Introduction to Protected Route and Require Auth


Private / protected  Route

App.js
 
 <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>


RequireAuth.js
	
 
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
 
const auth = getAuth(app);
 
const RequireAuth = ({ children }) => {
 
    const [user] = useAuthState(auth);
 
    const location = useLocation();
 
    // condition
    if (!user) {
 
        return <Navigate to="/login" state={{ from: location }} replace />;
 
    }
 
    return children;
};
 
export default RequireAuth;
 
## Video 8
	58-8 Module Summary and Implement Auth Redirect

Back to old route automatic

Login .js

 
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


  <button onClick={handleGoogleSignIn}>Google Sign In</button>




Hidden route

Jodi login kora / user  thake taile dekhabe naile dekhabe na

     {
                   user &&
                    <>
                        <Link to='/vip'> VIP</Link>
                    </>
                }


