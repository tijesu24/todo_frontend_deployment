import { useEffect, useState } from "react"
import axios from "axios";
export const Logout = () => {
    useEffect(() => {
        (async () => {
            try {
                console.log("auth: ")
                console.log(axios.defaults.headers.common['Authorization']);

                const { data } = await
                    axios.post('https://todo-backend-new-u6m3.onrender.com/logout/', {
                        refresh_token: localStorage.getItem('refresh_token')
                    }, { headers: { 'Content-Type': 'application/json' } },
                        { withCredentials: true });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            } catch (e) {
                console.log('logout not working', e)
                window.location.href = '/login'
            }
        })();
    }, []);
    return (
        <div></div>
    )
}