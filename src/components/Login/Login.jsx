import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const googleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(`Error : `, error.message);
      });
  };
  return (
    <div className="my-10">
      <button
        onClick={googleSign}
        className="rounded-lg bg-sky-400 p-3 font-medium text-slate-100"
      >
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
