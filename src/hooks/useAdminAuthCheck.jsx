import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adminUserLoggedIn } from "../features/auth/authSlice";

export default function useAdminAuthCheck() {
    const [authCheck, setAuthCheck] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const localAdminAuth = localStorage.getItem("lmsAuthAdmin");
        if (localAdminAuth) {
            const adminAuth = JSON.parse(localAdminAuth);
            dispatch(adminUserLoggedIn(adminAuth));
        }
        setAuthCheck(true);
    }, [dispatch]);
    return authCheck;
}
