import { useState } from "react";
import VideoAddModal from "./VideoAddModal";
import VideoItem from "./VideoItem";
import { useGetVideosQuery } from "../../../features/videoSlice/videoApi";
import VideoEditModal from "./VideoEditModal";

export default function Videos() {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const { data: videos, isLoading, isError, isSuccess } = useGetVideosQuery();
    const handleModal = () => setShowModal((prev) => !prev);
    const handleEditModal = () => setShowEditModal((prev) => !prev);

    let content = null;
    if (!isLoading && !isError && isSuccess && videos?.length > 0) {
        content = videos.map((video) => (
            <VideoItem
                handleModal={handleEditModal}
                key={video.id}
                video={video}
            />
        ));
    }

    return (
        <>
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button onClick={handleModal} className="btn ml-auto">
                        Add Video
                    </button>
                    <VideoAddModal
                        showModal={showModal}
                        handleModal={handleModal}
                    />
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
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
            {showEditModal && (
                <VideoEditModal
                    handleModal={handleEditModal}
                    showModal={showEditModal}
                />
            )}
        </>
    );
}
