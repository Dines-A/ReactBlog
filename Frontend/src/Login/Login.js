import '../App.css';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useHistory } from 'react-router';

import "../Login/Login.css"
import Header from '../Header/Header';
import  Footer from '../Footer/AllFooter';
function ErrorInfo({ state }) {
    if (state.status === 'unsuccessful') {
        let errorList = [];
        for (const item in state.error) {
            if (Object.hasOwnProperty.call(state.error, item)) {
                const error = state.error[item];
                console.log(error);
                let lis = error.map((errorTxt, index) => {
                    return <li className="list-unstyled" key={index}>{item}: {errorTxt}</li>
                })
                console.log(lis);
                errorList.push(lis);
            }
        }
        console.log('lis', errorList);
        console.log(state.error);
        return <p style={{ color: 'red' }}>{errorList}</p>
    } else return null;
}


function Login() {
    const user = useContext(UserContext);
    const history = useHistory();
    const [creds, setCreds] = React.useState({ username: user.name || '', password: '' });
    const [state, setState] = React.useState({ status: 'idle', error: null })

    React.useEffect(() => {
        if(!creds.username || !creds.password) return;
        setState({ status: 'loading', error: null });
        async function fetchData() {
            let response = await fetch('http://localhost:8000/api/token/login/',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(creds)
                }
            );
            let body = await response.json();

            if (response.status === 200) {
                // setState({ status: 'successful', error: null })
                user.setName(creds.username);
                user.setToken(body.auth_token);
                user.setLoggedIn(true);
                history.push('/blog');
            } else {
                setState({ status: 'unsuccessful', error: body })
            }
        }
        fetchData();
    }, [creds, user])

    function handleSubmit(event) {
        event.preventDefault();
        setCreds({
            username: event.target.username.value,
            password: event.target.password.value
        })
    }

    return (

        <>
            <Header/>
                <div className="container ">
                <div class="row justify-content-center ">
                    <div class="col-12 col-lg-6 ">
                    <div className="Login_Form">
            <ErrorInfo state={state} />
        <form
            action="http://localhost:8000/users/token"
                onSubmit={handleSubmit}>
                                            <h1>Login</h1>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                required
                            />
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                required
                            />
                            <label htmlFor="password" className="form-label">
                                password
                            </label>
                        </div>
                        <button
                            className="btn btn-primary mx-auto d-block my-3"
                            type="submit"
                        >
                            Verify
                        </button>
                    </form>
                </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </>

    
    );
}

export default Login;

// {/* <div className="container">
// <h1>Login</h1>
// <div className="login-form">
//     <ErrorInfo state={state} />
//     <form
//         action="http://localhost:8000/users/token"
//         onSubmit={handleSubmit}
//     >
//         <div>
//             <label>Username</label>
//             <input type="text" name="username" />
//         </div>
//         <div>
//             <label>Password</label>
//             <input type="password" name="password" />
//         </div>
//         <div>
//             <input type="checkbox" />
//             <label>Remember Me</label>
//         </div>
//         <div>
//             <button type="submit">Login</button>
//         </div>
//     </form>
// </div>
// </div> */}