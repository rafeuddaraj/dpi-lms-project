import { Link, useNavigate } from "react-router-dom";
import Input from "../../../Input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authApi } from "../../../../features/auth/authApi";

export default function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.confirmPassword === data.password) {
            dispatch(authApi.endpoints.register.initiate(data)).then(() => {
                navigate("/course/1");
            });
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                action="#"
                method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                    <Input
                        onChange={handleInput}
                        labelId={"name"}
                        value={data.name}
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        classes={"rounded-t-md"}
                        placeholder={"Student name"}
                    />
                    <Input
                        value={data.email}
                        onChange={handleInput}
                        labelId={"email-address"}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        classes={"rounded-t-md"}
                        placeholder={"Email address"}
                    />
                    <Input
                        value={data.password}
                        onChange={handleInput}
                        labelId={"password"}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        classes={"rounded-b-md"}
                        placeholder={"Password"}
                    />
                    <Input
                        value={data.confirmPassword}
                        onChange={handleInput}
                        labelId={"confirm-password"}
                        name="confirmPassword"
                        type="password"
                        autoComplete="confirm-password"
                        required
                        classes={"rounded-b-md"}
                        placeholder={"Confirm Password"}
                    />
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link
                            to={"/"}
                            className="font-medium text-violet-600 hover:text-violet-500">
                            Login
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Create Account
                    </button>
                </div>
            </form>
        </>
    );
}
