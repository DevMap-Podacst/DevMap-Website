const Episodes = [
    { href: 'https://anchor.fm/devmappodcast/episodes/000---Pilot-e2aljl/a-a5jass', title: "Episode 000 => Pilot"}
  ].map( episode => {
    episode.key = `nav-link-${episode.href}-${episode.title}`
    return episode
  })

export default Episodes