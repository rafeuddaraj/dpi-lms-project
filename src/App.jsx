import Course from "./pages/Student/Course";
import LeaderBoardPage from "./pages/Student/LeaderBoardPage";
import LoginPage from "./pages/Student/LoginPage";
import RegistrationPage from "./pages/Student/RegistrationPage";
import QuizPage from "./pages/Student/QuizPage";
import Layout from "./components/Layout";
// Admin
import AdminLogin from "./pages/Admin/LoginPage";
import AdminAssignmentMarksPage from "./pages/Admin/AssignmentMarksPage";
import AdminAssignmentPage from "./pages/Admin/AssignmentPage";
import AdminQuizPage from "./pages/Admin/QuizPage";
import AdminVideosPage from "./pages/Admin/VideosPage";
import DashboardPage from "./pages/Admin/DashboardPage";

import "./style/output.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./components/Student/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AdminRoute from "./components/Admin/AdminRoute";
import useAdminAuthCheck from "./hooks/useAdminAuthCHeck";
import NotFound from "./components/ui/NotFound";

export default function App() {
    const authCheck = useAuthCheck();
    const adminAuthCheck = useAdminAuthCheck();
    return !authCheck || !adminAuthCheck ? (
        <div>Authentication Checking</div>
    ) : (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/registration"
                    element={
                        <PublicRoute>
                            <RegistrationPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/course/:id"
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Course />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/leaderboard"
                    element={
                        <PrivateRoute>
                            <Layout>
                                <LeaderBoardPage />
                            </Layout>
                        </PrivateRoute>
                    }
                />
                {/* Admin setup */}
                <Route
                    path="/admin"
                    element={
                        <PublicRoute>
                            <AdminLogin />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/admin/assignment-mark"
                    element={
                        <AdminRoute>
                            <Layout>
                                <AdminAssignmentMarksPage />
                            </Layout>
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/assignment"
                    element={
                        <AdminRoute>
                            <Layout>
                                <AdminAssignmentPage />
                            </Layout>
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/quiz"
                    element={
                        <AdminRoute>
                            <Layout>
                                <AdminQuizPage />
                            </Layout>
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/videos"
                    element={
                        <AdminRoute>
                            <Layout>
                                <AdminVideosPage />
                            </Layout>
                        </AdminRoute>
                    }
                />
                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminRoute>
                            <Layout>
                                <DashboardPage />
                            </Layout>
                        </AdminRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
