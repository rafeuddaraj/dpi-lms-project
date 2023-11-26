import { Link } from "react-router-dom";
import Input from "../../../Input/Input";

export default function Form() {
    return (
        <>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px">
                    <Input
                        labelId={"name"}
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                        classes={"rounded-t-md"}
                        placeholder={"Student name"}
                    />
                    <Input
                        labelId={"email-address"}
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        classes={"rounded-t-md"}
                        placeholder={"Email address"}
                    />
                    <Input
                        labelId={"password"}
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        classes={"rounded-b-md"}
                        placeholder={"Password"}
                    />
                    <Input
                        labelId={"confirm-password"}
                        name="confirmPassword"
                        type="password"
                        autocomplete="confirm-password"
                        required
                        classes={"rounded-b-md"}
                        placeholder={"Confirm Password"}
                    />
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <Link
                            to={'/'}
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
