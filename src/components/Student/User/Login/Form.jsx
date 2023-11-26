import { Link } from "react-router-dom";
import Input from "../../../Input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {authApi} from '../../../../features/auth/authApi'
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        // working
        dispatch(authApi.endpoints.login.initiate(data))
        .then(()=>{
            navigate('/course/1')
        })
    }

    const handleChange = (e)=>{
        setData(prevData=>({...prevData, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                    <Input
                        labelId={"email-address"}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={data.email}
                        onChange={handleChange}
                        classes={"rounded-t-md"}
                        placeholder={"Email address"}
                    />
                    <Input
                        labelId={"password"}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={handleChange}
                        value={data.password}
                        classes={"rounded-b-md"}
                        placeholder={"Password"}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link
                            to={'/admin'}
                            className="font-medium text-violet-600 hover:text-violet-500">
                            Admin?
                        </Link>
                    </div>
                    <div className="text-sm">
                        <Link
                            to={'/registration'}
                            className="font-medium text-violet-600 hover:text-violet-500">
                            Create New Account
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}
