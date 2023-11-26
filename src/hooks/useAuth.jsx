import { useSelector } from "react-redux";
import { authSelect } from "../features/auth/authSelects";

export default function useAuth() {
    const { user, accessToken } = useSelector(authSelect);

    if (accessToken && user?.role === 'student') {
        return true;
    }

    return false;
}
