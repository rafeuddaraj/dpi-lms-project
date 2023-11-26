import { useSelector } from "react-redux";
import { authSelect } from "../features/auth/authSelects";

export default function useAdminAuth() {
    const { accessToken, user } = useSelector(authSelect);
    if (user?.role === "admin" && accessToken) {
        return true;
    }
    return false;
}
