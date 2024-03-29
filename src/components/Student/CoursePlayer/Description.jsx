import { assignmentApi } from "../../../features/assignmentSlice/assignmentApi";
import { useGetQuizQuery } from "../../../features/quizSlice/quizApi";
import { useGetQuizMarkQuery } from "../../../features/quizMarkSlice/quizMarkApi";
import { useDispatch, useSelector } from "react-redux";
import { authSelect } from "../../../features/auth/authSelects";
import { useEffect, useState } from "react";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMarkSlice/assignmentMarkApi";
import Quiz from "../Quiz/Quiz";
import Assignment from "../Assignment/Assignment";
import { size } from "lodash";

export default function Description({ video }) {
    const dispatch = useDispatch();
    const { title, date, description, id } = video || {};
    const [hasQuiz, setHasQuiz] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [assignment, setAssignment] = useState({});
    const { data: quizzes, isSuccess: isQuizzesSuccess } = useGetQuizQuery(id, {
        skip: hasQuiz,
    });
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
            (async () => {
                const data = await dispatch(
                    assignmentApi.endpoints.getAssignment.initiate(id)
                );
                setAssignment(data?.data);
            })();
        }
    }, [assignmentMark, dispatch, id]);

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
                                {assignmentMark[0]?.status === "published" &&
                                assignmentMark[0]?.mark !== 0
                                    ? `আপনার অ্যাসাইমেন্ট মার্ক ${assignmentMark[0]?.mark}`
                                    : "আপনার অ্যাসাইনমেন্ট টি পেন্ডিংয়ে আছে"}
                            </h2>
                        )}
                    {assignmentMark?.length === 0 &&
                        size(assignment) !== 0 && (
                            <button
                                onClick={handleAssignment}
                                className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                এসাইনমেন্ট
                            </button>
                        )}
                    {size(assignment) === 0 && size(assignmentMark) === 0 && (
                        <button className="px-3 font-bold py-1 border border-red text-red rounded-full text-sm hover:bg-red-300 hover:text-primary">
                            এই ভিডিওর জন্য কোনো অ্যাসাইমেন্ট নেই।
                        </button>
                    )}

                    {quizMark?.length !== 0 && isQuizMarkSuccess && (
                        <h2 className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm">
                            {`আপনার কুইজের মার্ক ${quizMark[0]?.totalMark}`}
                        </h2>
                    )}
                    {quizMark?.length === 0 &&
                        isQuizzesSuccess &&
                        quizzes?.length !== 0 && (
                            <button
                                onClick={handleQuiz}
                                className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                কুইজে অংশগ্রহণ করুন
                            </button>
                        )}

                    {size(quizzes) === 0 && size(quizMark) === 0 && (
                        <button className="px-3 font-bold py-1 border border-red text-red rounded-full text-sm hover:bg-red-300 hover:text-primary">
                            এই ভিডিওর জন্য কোনো কুইজ নেই।
                        </button>
                    )}
                </div>
                {showQuiz && <Quiz quizzes={quizzes} />}
                {showAssignment && (
                    <Assignment
                        assignment={assignment}
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
