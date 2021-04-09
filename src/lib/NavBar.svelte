<script>
    import Logo from '$lib/Logo.svelte'
    const streamers = [
        { href: 'https://anchor.fm/devmappodcast',
          label: 'Anchor.FM',
          image: '/static/anchor.png'},
        { href: 'https://itunes.apple.com/us/podcast/devmap-podcast/id1437898718',
          label: 'Apple Podcasts',
          image: '/static/apple_podcasts.png'},
        { href: 'https://www.breaker.audio/devmap-podcast',
          label: 'Breaker',
          image: '/static/breaker.png'},
        { href: 'https://castbox.fm/channel/id1446889',
          label: 'Castbox',
          image: '/static/castbox.png'},
        { href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy83MGI0YWY4L3BvZGNhc3QvcnNz',
          label: 'Google Podcasts',
          image: '/static/google_podcasts_outline.png'},
        { href: 'https://pca.st/g9Fg',
          label: 'Pocket Casts',
          image: '/static/pocket_casts.png'},
        { href: 'https://radiopublic.com/devmap-podcast-8gvzE9',
          label: 'RadioPublic',
          image: '/static/radiopublic.png'},
        { href: 'https://open.spotify.com/show/1V8gY5mZUsVdE0VAujPD1C',
          label: 'Spotify',
          image: '/static/spotify.png'},
        { href: 'https://www.stitcher.com/podcast/anchor-podcasts/devmap-podcast',
          label: 'Stitcher',
          image: '/static/stitcher.png'}
    ]


</script>



<nav class="bg-gray-dark shadow" role="navigation">
    <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <Logo />
      </div>
      <div class="ml-auto md:hidden">
        <button class="flex items-center px-3 py-2 border rounded" type="button">
          <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div class="w-full md:w-auto justify-between md:flex-grow md:flex md:items-center">

        <ul class="flex flex-col mt-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <li>
            <a class="block text-white text-xl px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600" href="/episodes" title="Episodes">Episodes</a>
          </li>
          <li>
            <a class="block text-white text-xl px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600" href="/blog" title="Blog">Blog</a>
          </li>
          <li>
            <a class="block text-white text-xl px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600" href="/contact" title="Contact Us">Contact Us</a>
          </li>
        </ul>

        <div class="flex flex-col mt-4 pt-4 justify-content-center border-t md:flex-row md:items-around md:mx-0 md:mt-0 md:pt-0 md:border-0">
            <p class="block text-white text-xl p-2 md:p-2 lg:p-2">Listen on:</p>
        {#each streamers as stream (stream)}
            <a class="block p-1 gap-x-2" href={stream.href} alt="{stream.label}">
                <img src={stream.image} alt={stream.label} />
            </a>
        {/each}
        </div>
      </div>
    </div>
  </nav>

<style>
   
    .bg-navbar {
        background: #1e1e1e;
    }
</style>