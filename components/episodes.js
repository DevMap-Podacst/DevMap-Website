import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Thumbnail from '../components/pCastThumbnail'
import { faPlayCircle, faPlay, faPause, faStepBackward, faStepForward, faVolumeUp,faVolumeDown, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
library.add(faPlayCircle, faPlay, faPause, faStepBackward, faStepForward, faVolumeUp, faVolumeDown, faVolumeOff)

const Episodes = () => (
        <div className="row">
			<div className="pcast-player">
				<Thumbnail />
				<div className="pcast-controls">
					<button class="pcast-play">
						<FontAwesomeIcon icon="play" size="lg" />
					</button>
					<button class="pcast-pause">
						<FontAwesomeIcon icon="pause" size="lg" />
					</button>
					<button class="pcast-rewind">
						<FontAwesomeIcon icon="step-backward" size="lg" />
					</button>
					<button class="pcast-speed">1x</button>
					<button class="pcast-skip">
						<FontAwesomeIcon icon="step-forward" size="lg" />
					</button>

					<span class="pcast-currenttime pcast-time">00:00</span>
					<progress class="pcast-progress" value="0"></progress>
					<span class="pcast-duration pcast-time">00:00</span>
					<button class="pcast-mute">
						<FontAwesomeIcon icon="volume-down" size="lg" />
					</button>
				</div>
			</div>
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
				border: 1px solid #e1e1e1;
				display: grid;
                grid-template-rows: auto;
                grid-template-columns: max-content 1fr;
                grid-template-areas:
                  "pcastThumbnail pcastPlayer";
				padding: 0;
				margin: 8px 18px;
				background: white;
                grid-area: pcastPlayer;
                width: 100%;
                max-width: 500px;
                height: 70px;
				justify-self: center;        
			  }
			  
        	`}</style>
        </div>
)

export default Episodes