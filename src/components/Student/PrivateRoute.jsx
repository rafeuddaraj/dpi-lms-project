import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { authSelect } from "../../features/auth/authSelects";

export default function PrivateRoute({ children }) {
    const { accessToken, user } = useSelector(authSelect);

    return accessToken && user?.role === "student" ? (
        children
    ) : (
        <Navigate to={"/"} />
    );
}
