<script context="module">
    export async function load({page, fetch}){
        const slug = page.params.slug;
        const url = `https://peaceful-savannah-98270.herokuapp.com/episodes/${slug}`;
        
        const requestOptions = {
        method: "GET",
        headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3OTMwNDIyLCJleHAiOjE2MjA1MjI0MjJ9.RdUte4WydneTDVyUF8htWEYt8cfpapqhveMMEPtnlEA"}
        }
        const episodeResponse = await fetch(url,requestOptions)

        if(episodeResponse.ok){
            let episodeData = await episodeResponse.json()
            return {
                props: { episode: episodeData}
            }
        }

        return {
            status: episodeResponse.status,
            error: new Error(`Could not load ${url}`)
        }
    }
</script>

<script>
    import AudioPlayer from '$lib/AudioPlayer.svelte'
    export let episode;

    // $:console.log(episode)
</script>

<!-- component -->
<div class="flex items-center justify-center h-screen bg-red-lightest">
    <div class="bg-white shadow-lg rounded-lg w-auto max-w-3xl" >
        <div class="flex">
            <div>
                <img class="w-full rounded-t hidden md:block" src={episode.ImageUrl ? episode.ImageUrl : "/static/Dev-Map-Logo_400x250.png"} alt="Album Pic">
            </div>
            <div class="w-full pt-3 pb-4 px-3">
                <h3 class="text-2xl text-grey-darkest font-medium">{episode.Title}</h3>
                <AudioPlayer src={episode.EpisodeAudioFile.url} />
            </div>
        </div>
        <hr class="h-px mt-1 bg-gray-200 border-none">
        <div class="mx-8 py-4 b">
            <div class="mt-1">
                <p class="text-sm text-grey mt-1">{episode.Description}</p>
            </div>
        </div>
    </div>
    
</div>