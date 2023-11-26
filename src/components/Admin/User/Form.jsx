import { Link, useNavigate } from "react-router-dom";
import Input from "../../Input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authApi } from "../../../features/auth/authApi";

export default function Form() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // working
        dispatch(authApi.endpoints.adminLogin.initiate(data)).then(() => {
            navigate("/admin/dashboard");
        });
    };

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
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
                        onChange={handleChange}
                        value={data.email}
                        classes={"rounded-t-md"}
                        labelId={"email-address"}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Email address"
                    />
                    <Input
                        onChange={handleChange}
                        value={data.password}
                        classes={"rounded-t-md"}
                        labelId={"password"}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link
                            to={"/"}
                            className="font-medium text-violet-600 hover:text-violet-500">
                            Login?
                        </Link>
                    </div>
                    <div className="text-sm">
                        <Link
                            href={"/admin"}
                            className="font-medium text-violet-600 hover:text-violet-500">
                            Forget
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
