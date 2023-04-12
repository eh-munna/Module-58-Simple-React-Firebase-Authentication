import React from 'react';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const googleSign = () => {
    console.log('test');
  };
  return (
    <div className="my-10">
      <button
        onClick={googleSign}
        className="rounded-lg bg-sky-400 p-3 font-medium text-slate-100"
      >
        Try to logged in
      </button>
    </div>
  );
};

export default Login;
