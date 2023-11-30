import { useDispatch } from "react-redux";
import { useGetAssignmentsMarksQuery } from "../../../../features/assignmentMarkSlice/assignmentMarkApi";
import { assignmentStatus } from "../../../../utils/assignmentStatus";
import AssignmentItem from "./AssignmentItem";
import AssignmentStatus from "./AssignmentStatus";
import { useEffect } from "react";
import { addMarksStatus } from "../../../../features/assignmentMarkSlice/assignmentMarkSlice";

export default function AssignmentMarks() {
    const {
        data: assignmentMarks,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAssignmentsMarksQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        if (assignmentMarks?.length > 0 && isSuccess) {
            const statuses = assignmentStatus(assignmentMarks);
            dispatch(addMarksStatus(statuses));
        }
    }, [assignmentMarks, dispatch, isSuccess]);

    let content = null;

    if (isLoading && !isError) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <div>{error?.message}</div>;
    }
    if (!isLoading && !isError && assignmentMarks?.length === 0) {
        content = <div>{"Assignments not found."}</div>;
    }
    if (!isLoading && !isError && assignmentMarks?.length > 0) {
        content = (
            <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                    <tr>
                        <th className="table-th">Assignment</th>
                        <th className="table-th">Date</th>
                        <th className="table-th">Student Name</th>
                        <th className="table-th">Repo Link</th>
                        <th className="table-th">Mark</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                    {assignmentMarks?.map((assignment) => (
                        <AssignmentItem
                            key={assignment.id}
                            assignment={assignment}
                        />
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <AssignmentStatus />
                <div className="overflow-x-auto mt-4">{content}</div>
            </div>
        </>
    );
}
