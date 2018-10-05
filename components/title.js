const Title = () => (
  <div className="page-InfoContainer">
    <img src="../static/Dev-Map-Logo.png" className="heroImage" />
	<h1 className="title">Welcome to DevMap!</h1>
	<p className="description">
	The Podcast for Junior Developers and the cure for Imposter Syndrome
	</p>
    <style jsx>{`
        .page-InfoContainer {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            ". logo logo ." 
            ". info info .";
          justify-content: center;
          align-content: center;
        }
        .heroImage {
          height: 300px;
          grid-area: logo;
          justify-self: center;
          align-self: center;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
          color: #ffffff;
          grid-area: info;
        }
      `}</style>
  </div>
)

export default Title