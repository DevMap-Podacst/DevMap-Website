import Link from 'next/link'

const EpisodeLinks = [
    { 
      href: 'https://anchor.fm/devmappodcast/episodes/000---Pilot-e2aljl/a-a5jass',
      title: "Episode 000 => Pilot"
    }
  ].map( episode => {
    episode.key = `nav-link-${episode.href}-${episode.title}`
    return episode
  })

const Episodes = () => (
  EpisodeLinks.map( ({key, href, title}) => (
          <div key={key} className="row">
            <Link href={href}>
              <a>{title}</a>
            </Link>
            <style jsx global>{`
              .row {
                display: grid;
                grid-template-rows: auto;
                grid-template-columns: repeat(6 1fr);
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
                padding: 18px 18px 24px;
                width: 220px;
                text-align: left;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b;
              }
              .card:hover {
                border-color: #067df7;
              }
              .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 18px;
              }
              .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 13px;
                color: #333;
              }
            `}</style>
          </div>
        ))
)

export default Episodes