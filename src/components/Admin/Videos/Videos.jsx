import { useState } from "react";
import VideoAddModal from "./VideoAddModal";
import VideoItem from "./VideoItem";

export default function Videos() {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button onClick={handleModal} className="btn ml-auto">
                        Add Video
                    </button>
                    <VideoAddModal showModal={showModal} handleModal={handleModal}/>
                </div>
                <div className="overflow-x-auto mt-4">
                    <table className="divide-y-1 text-base divide-gray-600 w-full">
                        <thead>
                            <tr>
                                <th className="table-th">Video Title</th>
                                <th className="table-th">Description</th>
                                <th className="table-th">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-600/50">
                            <VideoItem />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
