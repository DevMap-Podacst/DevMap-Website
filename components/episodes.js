
const Episodes = () => (
          <div className="row">
            {/* Paste the iframe link here from Anchor */}
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/005---Junior-VS-Senior-Developers--Whats-the-DIFF-e387ed" className="card" frameborder="0" scrolling="no"></iframe>
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/004---The-Big-Big-Jon-Interview----now-without-gluten-e2m5f2" className="card" frameborder="0" scrolling="no"></iframe>
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/003---New-hair--new-job-e2hcrk" className="card" frameborder="0" scrolling="no"></iframe>
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/002---The-Technical-Interview-e2eu8u" className="card" frameBorder="0" scrolling="no"></iframe>
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/001---Getting-a-Brown-Taco-e2bo4m" className="card" frameBorder="0" scrolling="no"></iframe>
            <iframe src="https://anchor.fm/devmappodcast/embed/episodes/000---Pilot-e2aljl/a-a5jass" className="card" frameBorder="0" scrolling="no"></iframe>
            
            <style jsx global>{`
              .row {
                display: grid;
                grid-template-rows: auto;
                grid-template-columns: repeat(6, 1fr);
                grid-template-areas:
                  ". logo logo ." 
                  ". info info ."
                  ". episodes episodes .";
                justify-content: center;
                align-content: center;
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }
              .card {
                padding: 18px 18px;
                width: 90vw;
                max-width: 500px;
                height: 100px;
                border: 0;        
              }
              
            `}</style>
          </div>
)

export default Episodes