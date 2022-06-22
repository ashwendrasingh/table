import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const PostData = async (e) => {
        e.preventDefault();

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password,
            })
        });
        const data = await res.json();
        console.log('data',data)
        if (res.status === 400 || !data) {
            
            window.alert("invalid ");
            console.log("invalid ")
            
        } else {
            
            window.alert(" login sucessfull");
            console.log(" login sucessfull")
            navigate('/')
        }


    }

    return (
        <>
            <div class='container'>
                <div class="cont">
                    <div class="form sign-in">
                        <h1>Log In</h1>
                        <form method="POST">
                            <label>
                                <span>Email</span>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>

                            <button type="button" class="submit" onClick={PostData}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Login;