// Import the react JS packages
import { useEffect, useState } from "react";
import axios from "axios";
import Todos from "./todos";
// Define the Login function.
export const Home = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {

        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        else {
            // console.log(1)
            // (async () => {
            //     try {
            //         const { data } = await axios.get(
            //             'https://todo-backend-new-u6m3.onrender.com/home/', {
            //             headers: {
            //                 'Content-Type': 'application/json'
            //             }
            //         }
            //         );
            //         setMessage(data.message);
            //     } catch (e) {
            //         console.log('not auth')
            //     }
            // })()
        };
    }, []);

    return (
        <>
            <div className="form-signin mt-5 text-center">
                <h3>{message}</h3>
            </div>
            <Todos />

        </>);
}