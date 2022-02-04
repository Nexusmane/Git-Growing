import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import React from 'react';

function AuthPage({ setUser }) {
  const [display, setDisplay] = useState('login');
  return (
    <main>
      <h1>Get Started</h1>
      <div>
        <button onClick={() => setDisplay('login')}>Log In</button>
        <button onClick={() => setDisplay('signup')}>Sign Up</button>
      </div>
      { display === 'login' ? <LoginForm setUser={setUser}/> :
      <SignUpForm setUser={setUser}/> }
    </main>
  )
};

export default AuthPage;