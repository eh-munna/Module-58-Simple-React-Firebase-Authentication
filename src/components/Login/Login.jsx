import React, { useState } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  // console.log(auth);
  const provider = new GoogleAuthProvider();
  const googleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(user);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(`Error : `, error.message);
      });
  };

  const googleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(`something is wrong`);
      });
  };
  console.log(user);
  return (
    <div className="my-10">
      {user ? (
        <button
          onClick={googleSignOut}
          className="rounded-lg bg-sky-400 p-3 font-medium text-slate-100"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={googleSign}
          className="rounded-lg bg-sky-400 p-3 font-medium text-slate-100"
        >
          Sign In
        </button>
      )}

      {/* conditional rendering */}

      {/* with ternary */}

      {user ? (
        <div className="my-8 border-rose-100 border text-left p-6">
          <div className="">
            <img className="my-2 max-w-full" src={user.photoURL} alt="" />
            <h2 className="text-sky-400 text-lg">Hello, {user.displayName}</h2>
            <h5>
              Your email : <span className="text-sky-400">{user.email}</span>
            </h5>
          </div>
        </div>
      ) : (
        ''
      )}

      {/* with logical and */}

      {user && (
        <div className="my-8 border-rose-100 border text-left p-6">
          <div className="">
            <img className="my-2 max-w-full" src={user.photoURL} alt="" />
            <h2 className="text-sky-400 text-lg">Hello, {user.displayName}</h2>
            <h5>
              Your email : <span className="text-sky-400">{user.email}</span>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
