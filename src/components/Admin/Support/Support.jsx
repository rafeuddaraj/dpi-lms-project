import SupportItem from "./SupportItem";
import SupportAddModal from "./SupportAddModal";
import SupportEditModal from "./SupportEditModal";
import { useGetSupportsQuery } from "../../../features/supports/supportsApi";
import { useState } from "react";

export default function Support() {
    const [showEditModal, setShowEditModal] = useState(false);
    const handleEditModal = () => setShowEditModal((prev) => !prev);
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    const { data: supports, isSuccess } = useGetSupportsQuery();

    let content = null;
    if (isSuccess && supports?.length > 0) {
        content = supports.map((support) => (
            <SupportItem key={support?.id} handleModal={handleEditModal} support={support} />
        ));
    }

    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button className="btn ml-auto" onClick={handleModal}>
                        Add Support
                    </button>
                </div>
                {showModal && (
                    <SupportAddModal
                        handleModal={handleModal}
                        showModal={showModal}
                    />
                )}
                <div className="overflow-x-auto mt-4">
                    <table className="divide-y-1 text-base divide-gray-600 w-full">
                        <thead>
                            <tr>
                                <th className="table-th">Start Time</th>
                                <th className="table-th">End Time</th>
                                <th className="table-th">Teacher</th>
                                <th className="table-th">Meet Link</th>
                                <th className="table-th">Status</th>
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
                <SupportEditModal
                    handleModal={handleEditModal}
                    showModal={showEditModal}
                />
            )}
        </>
    );
}
