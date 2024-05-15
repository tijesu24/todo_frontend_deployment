// Import the react JS packages 
import axios from "axios";
import { useState } from "react";
// Define the Login function.
export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            password2: password2,
            bio: bio,
            email: email,
        };
        // Create the POST requuest
        const { data } = await
            axios.post('https://todo-backend-new-u6m3.onrender.com/register/',
                user, {
                headers:
                    { 'Content-Type': 'application/json' }
            },
                {
                    withCredentials: true
                });

        // // Initialize the access & refresh token in localstorage.      
        // localStorage.clear();
        // localStorage.setItem('access_token', data.access);
        // localStorage.setItem('refresh_token', data.refresh);
        // axios.defaults.headers.common['Authorization'] =
        //     `Bearer ${data['access']}`;
        window.location.href = '/login'
    }
    return (
        <div className="row">
            <div className="Auth-form-container col-md-6 col-sm-10 mx-auto p-0">
                <form className="Auth-form" onSubmit={submit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input className="form-control mt-1"
                                placeholder="Enter Username"
                                name='username'
                                type='text' value={username}
                                required
                                onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input name='password'
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="form-group mt-3">
                            <label>Repeat Password</label>
                            <input name='password2'
                                type="password"
                                className="form-control mt-1"
                                placeholder="Repeat password"
                                value={password2}
                                required
                                onChange={e => setPassword2(e.target.value)} />
                        </div>


                        <div className="form-group mt-3">
                            <label>Email Address</label>
                            <input name='email'
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                value={email}
                                required
                                onChange={e => setEmail(e.target.value)} />
                        </div>


                        <div className="form-group mt-3">
                            <label>Bio</label>
                            <input name='bio'
                                type="text"
                                className="form-control mt-1"
                                placeholder="Bio"
                                value={bio}
                                required
                                onChange={e => setBio(e.target.value)} />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit"
                                className="btn btn-primary">Submit</button>
                        </div>
                        <div className="d-grid mt-4">
                            Already registered? <a href="/login">Login</a>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}