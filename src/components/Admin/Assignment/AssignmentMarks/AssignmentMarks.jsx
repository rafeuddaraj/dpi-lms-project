import AssignmentItem from "./AssignmentItem";
import AssignmentStatus from "./AssignmentStatus";

export default function AssignmentMarks() {
    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <AssignmentStatus />
                <div className="overflow-x-auto mt-4">
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
                            <AssignmentItem />
                            <AssignmentItem />
                            <AssignmentItem />
                            <AssignmentItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
