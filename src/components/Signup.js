import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import './App.css';
const Signup = () => {
const navigate =useNavigate();

    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;
    const getUserdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value });
      
    };

    const PostData = async (e) => {
      
        const { name, email, password, cpassword } = user;
        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });
        const data =await res.json();
        if(data.status===422|| !data){
            window.alert("invalid registration");
            console.log("invalid registration")
        }else{
            window.alert(" registration sucessfull");
            console.log(" registration sucessfull")
 
            navigate('/login')

        }


    }

    return (
        <> <div class='container'>
            <div class="cont">
                <form  method="POST" >
                <div class="form sign-in">
                    <h1>Welcome</h1>
                    <label>
                        <span>Name</span>
                        <input type="email" name="name" autoComplete="off"
                            value={user.name}
                            onChange={getUserdata} />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" name="email" autoComplete="off"
                            value={user.email}
                            onChange={getUserdata} />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" autoComplete="off"
                            value={user.password}
                            onChange={getUserdata} />
                    </label>
                    <label>
                        <span>Confirm Password</span>
                        <input type="password" name="cpassword" autoComplete="off"
                            value={user.cpassword}
                            onChange={getUserdata} />
                    </label>

                    <button type="button" class="submit" onClick={PostData}>Sign Up</button>

                </div>
                </form>
            </div>
        </div>
        </>

    )
}
export default Signup;