<script>
    export let episode
</script>

<div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
    <a href="/episodes/{episode.id}" class="title font-bold block cursor-pointer hover:underline">
      <img class="w-full" src="{episode.EpisodeImage.url ? episode.EpisodeImage.url : "./static/Dev-Map-Logo_400x250.png"}" alt="DevMap Episode" />
    </a>
    <div class="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">10:53</div>
    <!-- <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">New</div> -->
    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
      <span class="mr-1 p-1 px-2 font-bold">Episode #: {episode.EpisodeNumber}</span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Likes</span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Dislikes</span>
    </div>
    <div class="desc p-4 text-gray-800">
      <a href="/episodes/{episode.id}" class="title font-bold block cursor-pointer hover:underline">{episode.Title}</a>
      <!-- <a href="https://www.youtube.com/user/sam14319" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">@dynamo_gaming</a> -->
      <span class="description text-sm block py-2 border-gray-400 mb-2">{@html episode.Description}</span>
    </div>
  </div>