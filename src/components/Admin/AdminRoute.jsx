import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelect } from "../../features/auth/authSelects";

export default function AdminRoute({ children }) {
    const { accessToken, user } = useSelector(authSelect);
    return accessToken && user?.role === "admin" ? (
        children
    ) : (
        <Navigate to={"/admin"} />
    );
}
