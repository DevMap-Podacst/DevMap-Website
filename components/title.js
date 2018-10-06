const Title = () => (
  <div className="page-InfoContainer">
    <img src="../static/Dev-Map-Logo_400x250.png" className="heroImage" />
	<h1 className="title">Welcome to DevMap!</h1>
	<p className="description">
	The Podcast for Junior Developers and the cure for Imposter Syndrome
	</p>
    <style jsx>{`
        .page-InfoContainer {
          display: grid;
          grid-template-rows: minmax(100px, auto);
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            ". logo logo ." 
            ". title title ."
			". description description . ";
          justify-content: center;
          align-content: center;
        }
		@media (max-width: 414px) {
			.page-InfoContainer{
				grid-template-areas:
				"logo logo logo logo" 
				"title title title title"
				"description description description description";
			}
		}

        .heroImage {
          height: auto;
		  max-width: 400px;
          grid-area: logo;
          justify-self: center;
          align-self: center;
        }
		@media (max-width: 414px) {
			.heroImage {
				max-width: 90vw;
			}
		}
        .title {
          margin: 0;
          padding: 0;
          font-size: 2.5rem;
		  grid-area: title;
        }
        .title,
        .description {
          text-align: center;
          color: #ffffff;
        }
		.description {
			grid-area: description;
		}
      `}</style>
  </div>
)

export default Title