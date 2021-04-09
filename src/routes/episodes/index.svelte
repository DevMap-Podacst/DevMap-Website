
<script context="module">
  export async function load({fetch}){
    const url = `https://peaceful-savannah-98270.herokuapp.com/episodes`;
    
    const requestOptions = {
      method: "GET",
      headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3OTMwNDIyLCJleHAiOjE2MjA1MjI0MjJ9.RdUte4WydneTDVyUF8htWEYt8cfpapqhveMMEPtnlEA"}
    }
    const episodesResponse = await fetch(url,requestOptions)

    if(episodesResponse.ok){
      let episodesData = await episodesResponse.json()
      return {
        props: {
          episodes: episodesData.reverse()
        }
      }
    }

    return {
      status: episodesResponse.status,
      error: new Error(`Could not load ${url}`)
    }
  }
</script>

<script>
    import Episode from './_Episode.svelte'
   export let episodes;  
</script>


<div class="holder my-12 mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  <!-- each -->  
  {#each episodes as episode (episode) }
      <Episode {episode} />
  {/each}
  <!-- each -->
    
</div>