import QuizItem from "./QuizItem";
import QuizAddModal from "./QuizAddModal";
import { useState } from "react";
import QuizEditModal from "./QuizEditModal";
import { useGetQuizzesQuery } from "../../../features/quizSlice/quizApi";

export default function Quiz() {
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditModal = () => setShowEditModal((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);

    const { data: quizzes, isSuccess } = useGetQuizzesQuery();

    let content = null;

    if (isSuccess && quizzes?.length > 0) {
        content = quizzes?.map((quiz, index) => (
            <QuizItem
                key={quiz.id}
                noq={index}
                quiz={quiz}
                handleModal={handleEditModal}
            />
        ));
    }

    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button className="btn ml-auto" onClick={handleModal}>
                        Add Quiz
                    </button>
                </div>
                {showModal && (
                    <QuizAddModal
                        handleModal={handleModal}
                        showModal={showModal}
                    />
                )}
                <div className="overflow-x-auto mt-4">
                    <table className="divide-y-1 text-base divide-gray-600 w-full">
                        <thead>
                            <tr>
                                <th className="table-th">Question</th>
                                <th className="table-th">Video</th>
                                <th className="table-th justify-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600/50">
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
            {showEditModal && (
                <QuizEditModal
                    handleModal={handleEditModal}
                    showModal={showEditModal}
                />
            )}
        </>
    );
}
