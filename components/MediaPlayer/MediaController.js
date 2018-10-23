import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlayCircle, faPlay, faPause, faStepBackward, faStepForward, faVolumeUp,faVolumeDown, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
library.add(faPlayCircle, faPlay, faPause, faStepBackward, faStepForward, faVolumeUp, faVolumeDown, faVolumeOff)


const MediaController = () => (
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
	<style jsx>{`
		/* Pcast Player */
		.pcast-controls {
			align-self: end;
			background: #000;
			box-sizing: border-box;
			color: #fff;
			display: flex;
			flex-flow: row nowrap;
			font-size: 14px;
			grid-area: Player;
			height: 42px;
			overflow: hidden;
			padding: 5px;
			justify-self: stretch;
			justify-content: space-between;
		}
		  button {
			background: #2a2a2a;
			color: #fff;
			border: 0;
			border-radius: 2px;
			padding: 5px;
			line-height: 22px;
			-webkit-appreance: none;
			min-width: 32px;
		  }
		  progress {
			height: 13px;
			width: calc(100% - 281px);
			appearance: none;
		  }
		  .pcast-controls progress[value]::-webkit-progress-bar {
			background-color: #555;
			border-radius: 0;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
		  }
		  .pcast-controls progress[value]::-webkit-progress-value {
			background: #fff;
		  }
		  .pcast-controls .pcast-time {
			display: inline-block;
			font-size: 13px;
			padding: 0 5px;
			text-align: center;
			width: 4em;
		  }
		  .pcast-controls .pcast-speed {
			width: 2.5em;
		  }
		  
	`}</style>
	</div>
)

export default MediaController