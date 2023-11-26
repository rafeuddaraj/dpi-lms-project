import QuizItem from "./QuizItem";
import QuizAddModal from "./QuizAddModal";
import { useState } from "react";

export default function Quiz() {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button className="btn ml-auto" onClick={handleModal}>
                        Add Quiz
                    </button>
                </div>
                <QuizAddModal handleModal={handleModal} showModal={showModal} />
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
                            <QuizItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
