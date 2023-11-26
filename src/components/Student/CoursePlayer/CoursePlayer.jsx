import Player from "./Player";
import Description from "./Description";
import PlayList from "./PlayList";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../../features/videoSlice/videoApi";

export default function CoursePlayer() {
    const {id} = useParams()
    const {data:video, isSuccess} = useGetVideoQuery(id)
    let content = null

    if(isSuccess && video?.id){
        content = <>
        <Player url={video.url} title={video.title}/>
                            <Description video={video}/>
        </>
    }
    return (
        <>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            {content}
                        </div>
                        <PlayList />
                    </div>
                </div>
            </section>
        </>
    );
}
