import { useState } from "react";
import AssignmentLists from "./AssignmentLists";
import AssignmentAddModal from "./AssignmentAddModal";

export default function Assignment() {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button onClick={handleModal} className="btn ml-auto">
                        Add Assignment
                    </button>
                    {showModal && (
                        <AssignmentAddModal
                            handleModal={handleModal}
                            showModal={showModal}
                        />
                    )}
                </div>
                <AssignmentLists />
            </div>
        </>
    );
}
