import Player from "./Player";
import Description from "./Description";
import PlayList from "./PlayList";

export default function CoursePlayer() {
    return (
        <>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            <Player />
                            <Description />
                        </div>
                        <PlayList />
                    </div>
                </div>
            </section>
        </>
    );
}
