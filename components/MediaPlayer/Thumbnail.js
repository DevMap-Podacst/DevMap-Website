const PlayerThumbnail = () => (
    <div className="pcast-thumbnail">
        <img src="/static/dev-map-logo_400x250.png" />
    <style jsx>{`
        .pcast-thumbnail {
            height: 70px;
            grid-area: Thumbnail;
            padding: 0 5px 0 0;
            grid-column: 1/2;
            grid-row: 1/3;
        }
        .pcast-thumbnail img {
            height: 110px;
        }
        `}</style>
    </div>
)

export default PlayerThumbnail