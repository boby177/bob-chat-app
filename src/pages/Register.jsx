import React from 'react';
import Image from '../imgs/add-image.png'

function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Bob Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input style={{display: "none"}} type="file" id='file'/>
                    <label htmlFor="file">
                        <img src={Image} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>SIGN UP</button>
                </form>
                <p> Have any account? Login here</p>
        </div>

        </div>
    )
}

export default Register