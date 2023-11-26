import PlayListItem from "./PlayListItem";

export default function PlayList() {
    return (
        <>
            <div
            className="playlist"
                style={{
                    height: "calc( 100vh - 129px)",
                    overflowY: "auto"
                }}>
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
            </div>
        </>
    );
}
