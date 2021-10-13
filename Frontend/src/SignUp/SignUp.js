import '../App.css';
import './SignUp.css';
import Header from '../Header/Header';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useHistory } from 'react-router';

import "../SignUp/SignUp.css";
import  Footer from '../Footer/AllFooter';

function ErrorInfo({ state }) {
    if (state.status === 'unsuccessful') {
        let errorList = [];
        for (const item in state.error) {
            if (Object.hasOwnProperty.call(state.error, item)) {
                const error = state.error[item];
                console.log(error);
                let lis = error.map((errorTxt, index) => {
                    return <li key={index}>{item}: {errorTxt}</li>
                })
                console.log(lis);
                errorList.push(lis);
            }
        }
        console.log('lis', errorList);
        console.log(state.error);
        return <p style={{ color: 'red' }}>{errorList}</p>
    } else return ''
}


function SignUp() {
    const [creds, setCreds] = React.useState({ email: '', username: '', password: '' });
    const [state, setState] = React.useState({ status: 'idle', error: null })
    const user = useContext(UserContext);
    const history = useHistory();

    React.useEffect(() => {
        if(!creds.username || !creds.password) return;
        setState({ status: 'loading', error: null });
        async function fetchData() {
            let response = await fetch('http://localhost:8000/api/users/',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(creds)
                }
            );
            let body = await response.json();
            console.log(body)

            if (response.status === 201) {
                // setState({ status: 'successful', error: null })
                console.log("User signed up", body);
                user.setName(creds.username);
                history.push('/login');
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
            password: event.target.password.value,
            email: event.target.email.value,
        })
    }

    return (
        <>
            <Header />
            <div className="container">
                    <div class="row justify-content-center ">
                    <div className="col-12 col-lg-6" >
                    <div className="Login_Form">
                    <ErrorInfo state={state} />
                    <form className="Login_Form" action="http://localhost:8000/users/token"  method="POST" onSubmit={handleSubmit} autoComplete="off" >
                        <h1>SignUp</h1>
                                    <div className="form-floating">
                                    <input type="text" className="form-control" id="username"  name="username" required/>
                                    <label htmlFor="Username" className="form-label"> Username</label>
                                    </div>
                                    <div className="form-floating">
                                    <input type="email" className="form-control" id="email"  name="email"  required/>
                                    <label htmlFor="email" className="form-label">Email</label>
                                    </div>
                                    <div className="form-floating">
                                    <input type="password" className="form-control" id="password"  name="password" required />
                                    <label htmlFor="password" className="form-label">password</label>
                        </div>
                                <div className="mt-2" > 
                                <input type="checkbox" />
                     <label>Agree to terms and conditions</label>
                                </div>
                    <button  className="btn btn-primary mx-auto d-block my-3" type="submit">
                            Register
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

export default SignUp;
// {/* <form
// action="http://localhost:8000/users/token"
// onSubmit={handleSubmit}
// >
// <div>
//     <label>Username</label>
//     <input type="text" name="username" />
// </div>
// <div>
//     <label>Email</label>
//     <input type="email" name="email" />
// </div>
// <div>
//     <label>Password</label>
//     <input type="password" name="password" />
// </div>
// <div>
    // <input type="checkbox" />
    // <label>Agree to terms and conditions</label>
// </div>
// <div>
//     <button type="submit">SignUp</button>
// </div>
// </form> */}