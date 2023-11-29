import { useNavigate } from "react-router-dom";
import { useGetAssignmentQuery } from "../../../features/assignmentSlice/assignmentApi";
import { quizApi, useGetQuizQuery } from "../../../features/quizSlice/quizApi";
import { useGetQuizMarkQuery } from "../../../features/quizMarkSlice/quizMarkApi";
import { useDispatch, useSelector } from "react-redux";
import { authSelect } from "../../../features/auth/authSelects";
import { useEffect, useState } from "react";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMarkSlice/assignmentMarkApi";
import Quiz from "../Quiz/Quiz";
import Assignment from "../Assignment/Assignment";

export default function Description({ video }) {
    const { title, date, description, id } = video || {};
    const [hasQuiz, setHasQuiz] = useState(true);
    const [hasAssignment, setHasAssignment] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { data: assignment, isSuccess: isAssignmentSuccess } =
        useGetAssignmentQuery(id, { skip: hasAssignment });
    const { data: quizzes, isSuccess: isQuizzesSuccess } = useGetQuizQuery(id, {
        skip: hasQuiz,
    });
    const navigate = useNavigate();
    const { user } = useSelector(authSelect);
    const { data: quizMark, isSuccess: isQuizMarkSuccess } =
        useGetQuizMarkQuery({
            id,
            studentId: user?.id,
        });
    const { data: assignmentMark, isSuccess: isAssignmentMarkSuccess } =
        useGetAssignmentMarkQuery({
            id,
            studentId: user?.id,
        });

    useEffect(() => {
        if (quizMark?.length === 0) {
            setHasQuiz(false);
        }
    }, [quizMark]);

    useEffect(() => {
        if (assignmentMark?.length === 0) {
            setHasAssignment(false);
        }
    }, [assignmentMark]);

    const handleModal = () => {
        setShowModal((prev) => !prev);
        setShowAssignment((prev) => {
            if (prev === true) {
                return false;
            }
        });
    };
    const handleAssignment = () => {
        setShowModal(true);
        setShowAssignment((prev) => !prev);
        setShowQuiz((prev) => {
            if (prev === true) {
                return false;
            }
        });
    };
    const handleQuiz = () => {
        setShowQuiz((prev) => !prev);
        setShowAssignment((prev) => {
            if (prev === true) {
                return false;
            }
        });
    };

    return (
        <>
            <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                    {title}
                </h1>
                <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                    {date}
                </h2>

                <div className="flex gap-4">
                    {assignmentMark?.length !== 0 &&
                        isAssignmentMarkSuccess && (
                            <h2 className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm">
                                {assignmentMark[0]?.status === 'published' ? (`আপনার অ্যাসাইমেন্ট মার্ক ${assignmentMark[0]?.mark}`) : ('অনুগ্রহ করে অপেক্ষা করুন') }
                            </h2>
                        )}
                    {assignmentMark?.length === 0 &&
                        isAssignmentSuccess &&
                        assignment?.length > 0 && (
                            <button
                                onClick={handleAssignment}
                                className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                এসাইনমেন্ট
                            </button>
                        )}

                    {quizMark?.length !== 0 && isQuizMarkSuccess && (
                        <h2 className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm">
                            {`আপনার কুইজের মার্ক ${quizMark[0]?.totalMark}`}
                        </h2>
                    )}
                    {quizMark?.length === 0 &&
                        isQuizzesSuccess &&
                        quizzes?.length > 0 && (
                            <button
                                onClick={handleQuiz}
                                className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                কুইজে অংশগ্রহণ করুন
                            </button>
                        )}
                </div>
                {showQuiz && <Quiz />}
                {showAssignment && (
                    <Assignment
                        assignment={assignment[0]}
                        handleModal={handleModal}
                        showModal={showModal}
                    />
                )}
                <p className="mt-4 text-sm text-slate-400 leading-6">
                    {description}
                </p>
            </div>
        </>
    );
}
