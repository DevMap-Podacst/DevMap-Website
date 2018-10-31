import Thumbnail from './MediaPlayer/Thumbnail'
import MediaController from './MediaPlayer/MediaController'
const episodesList =  [
	{ 
		"href": "http://anchor.fm/devmappodcast",
		"title": "Episode---000| Pilot",
		"description": "In our pilot episode, we tell you what to expect from this podcast.",
	},
	{ 
		"href": "http://anchor.fm/devmappodcast",
		"title": "Episode---001| Getting a Brown Taco",
		"description": "In our first episode, Sukari, Mary, Jason, and Omar talk about getting that first job",
	},
	{ 
		"href": "https://anchor.fm/devmappodcast/episodes/002---The-Technical-Interview-e2eu8u",
		"title": "Episode---002| The Technical Interview",
		"description": "Sukari, Jason, and Omar talk about how to master the technical interview and share some techniques on how to",
	}   
	];

const Episodes = () => (
        <div className="row">
			{episodesList.map( ({key, title, description, href }) => (
				<div key={title} className="pcast-player">
					<Thumbnail />
					<h2 className="pcast-text pcast-title">{title}</h2>
					<p className="pcast-text pcast-details">{description}</p>
					<MediaController/>
					
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
				  "Thumbnail Title"
				  "Thumbnail Description"
				  "Thumbnail Media";
				padding: 0;
				margin: 8px 18px;
				background: #000;
                width: 100%;
                max-width: 600px;
                height: 110px;
				justify-self: center;        
			  }
			  .pcast-text{
				  color: #FFF;
				  margin: 0;
				  padding: 0;
			  }
			  .pcast-title {
				  grid-area: Title;
				  justify-self: stretch;
				  align-self: start;
				  margin: 0;
				  grid-column: 2/5;
				  grid-row: 1/2;
				  font-size: 1.1rem;
			  }
			  .pcast-details {
				  grid-area: Description;
				  justify-self: stretch;
				  align-self: center;
				  margin: 0;
				  grid-column: 2/5;
				  grid-row: 2/3;
				  overflow: hidden;
			  }

        	`}</style>
        </div>
)

export default Episodes