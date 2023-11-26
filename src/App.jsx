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

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route
                    path="/quiz/:id"
                    element={
                        <Layout>
                            <QuizPage />
                        </Layout>
                    }
                />
                <Route
                    path="/course/:id"
                    element={
                        <Layout>
                            <Course />
                        </Layout>
                    }
                />
                <Route
                    path="/leaderboard"
                    element={
                        <Layout>
                            <LeaderBoardPage />
                        </Layout>
                    }
                />
                {/* Admin setup */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route
                    path="/admin/assignment-mark"
                    element={
                        <Layout>
                            <AdminAssignmentMarksPage />
                        </Layout>
                    }
                />
                <Route
                    path="/admin/assignment"
                    element={
                        <Layout>
                            <AdminAssignmentPage />
                        </Layout>
                    }
                />
                <Route
                    path="/admin/quiz"
                    element={
                        <Layout>
                            <AdminQuizPage />
                        </Layout>
                    }
                />
                <Route
                    path="/admin/videos"
                    element={
                        <Layout>
                            <AdminVideosPage />
                        </Layout>
                    }
                />
                <Route
                    path="/admin/dashboard"
                    element={
                        <Layout>
                            <DashboardPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}
