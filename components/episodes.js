import Thumbnail from './MediaPlayer/Thumbnail'
import MediaController from './MediaPlayer/MediaController'
const episodesList =  [
	{ 
		"href": "https://anchor.fm/devmappodcast",
		"title": "Episode---000",
		"description": "lorem ipsum",
	},
	{ 
		"href": "https://anchor.fm/devmappodcast",
		"title": "Episode---001",
		"description": "lorem ipsum",
	},
	{ 
		"href": "https://anchor.fm/devmappodcast",
		"title": "Episode---002",
		"description": "lorem ipsum",
	}   
	]

const Episodes = () => (
        <div className="row">
			{episodesList.map( ({title, description }) => (
				<div className="pcast-player">
					<Thumbnail />
					<h2 className="pcast-title">{title}</h2>
					<p className="pcast-details">{description}</p>
					<MediaController/>
					<audio src="{href}" />
				</div>
			))}
            <style jsx global>{`
              .row {
				align-items: center;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				margin: 80px auto 40px;
				max-width: 880px;
              }
              .pcast-player {
				border-top: 1px solid #e1e1e1;
				border-left: 1px solid #e1e1e1;
				display: grid;
                grid-template-rows: auto;
                grid-template-columns: max-content 1fr;
                grid-template-areas:
				  "Thumbnail Player"
				  "Thumbnail Player";
				padding: 0;
				margin: 8px 18px;
				background: white;
                width: 100%;
                max-width: 600px;
                height: 110px;
				justify-self: center;        
			  }
			  .pcast-title {
				  grid-area: Player;
				  justify-self: stretch;
				  align-self: start;
				  margin: 0;
			  }
			  .pcast-details {
				  grid-area: Player;
				  justify-self: stretch;
				  align-self: center;
				  margin: 0;
			  }

        	`}</style>
        </div>
)

export default Episodes