import React from 'react';

function Login() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Bob Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>SIGN IN</button>
                </form>
                <p>Do not have any account? Register here</p>
        </div>

        </div>
    )
}

export default Login