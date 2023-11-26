import { useGetVideosQuery } from "../../../features/videoSlice/videoApi";
import PlayListItem from "./PlayListItem";

export default function PlayList() {
    const { isSuccess, data: videos } = useGetVideosQuery();

    let content = null;

    if (isSuccess && videos?.length > 0) {
        content = videos.map((video) => (
            <PlayListItem key={video.id} video={video} />
        ));
    }

    return (
        <>
            <div
                className="playlist"
                style={{
                    height: "calc( 100vh - 129px)",
                    overflowY: "auto",
                }}>
                {content}
            </div>
        </>
    );
}
