import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

  return (
    <div>
        <div className="login_container">
            <h1>Sign In</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>E-mail</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            
            <p>
                By signing in, you agree to the Store's website Conditions of Use & Sale. Please see our Privacy Notice and our Interest-based Ads Notice.
            </p>
            <button className='login_register'> Create Account</button>
        </div>
    </div>
  )
}

export default Login;