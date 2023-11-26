import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelect } from "../features/auth/authSelects";

export default function PublicRoute({ children }) {
    const { accessToken, user } = useSelector(authSelect);

    if (accessToken) {
        if (user?.role === "admin") {
            return <Navigate to={"/admin/dashboard"} />;
        } else if (user?.role === "student") {
            return <Navigate to={"/course/1"} />;
        }
    }
    return children;
}
