import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const localAuth = localStorage.getItem('lmsAuth');
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            dispatch(userLoggedIn(auth));
        }
        setAuthCheck(true);
    }, [dispatch]);

    return authCheck;
}
