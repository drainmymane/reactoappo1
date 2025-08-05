import React, { useContext } from 'react';
import AwesomeInput from '../components/UI/input/AwesomeInput';
import AwesomeButton from '../components/UI/button/AwesomeButton';
import { AuthContext } from '../components/context/context';
function Login() {
    const { isAuth, setAuth } = useContext(AuthContext);

    const submit = e => {
        e.preventDefault();
        setAuth(true);
        localStorage.setItem('auth', 'true')
    }


    return (
        <div>
            <div>Login Page</div>
            <form onSubmit={submit} className='login_form'>
                <AwesomeInput placeholder="Login"></AwesomeInput>
                <AwesomeInput placeholder="Passwd"></AwesomeInput>
                <AwesomeButton>Enter</AwesomeButton>
            </form>
        </div>
        
    );
}

export default Login;