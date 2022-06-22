import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {

const [ userdata, setUserdata]=useState()

    const navigate = useNavigate();
    const callAboutpage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            });

            const data = await res.json();
            console.log(data);
            setUserdata(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) { console.log('error5') 
        navigate('/login');
    }


    }

    useEffect(() => {
        callAboutpage();
    }, []);

    return (
        <>
           
        </>

    )
}
export default About