const PlayerThumbnail = () => (
    <div className="pcast-thumbnail">
        <img src="/static/dev-map-logo_400x250.png" />
    <style jsx>{`
        .pcast-thumbnail {
            height: 70px;
            grid-area: pcastThumbnail;
            padding: 0 10px 0 0;
        }
        .pcast-thumbnail img {
            height: 70px;
        }
        `}</style>
    </div>
)

export default PlayerThumbnail