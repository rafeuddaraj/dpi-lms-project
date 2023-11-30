import { useState } from "react";
import AssignmentEditModal from "./AssignmentEditModal";
import AssignmentList from "./AssignmentList";
import { useGetAssignmentsQuery } from "../../../features/assignmentSlice/assignmentApi";

export default function AssignmentLists() {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    const { data: assignments, isSuccess: isSuccessAssignments } =
        useGetAssignmentsQuery();

    let content = null;

    if (isSuccessAssignments && assignments?.length > 0) {
        content = assignments.map((assignment) => (
            <AssignmentList
                handleModal={handleModal}
                key={assignment.id}
                assignment={assignment}
            />
        ));
    }
    return (
        <>
            <div className="overflow-x-auto mt-4">
                <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Title</th>
                            <th className="table-th">Video Title</th>
                            <th className="table-th">Mark</th>
                            <th className="table-th">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        {content}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <AssignmentEditModal
                    handleModal={handleModal}
                    showModal={showModal}
                />
            )}
        </>
    );
}
