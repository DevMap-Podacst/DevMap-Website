<script>
    import Logo from '$lib/Logo.svelte'
</script>

<footer class="flex justify-center px-4 text-gray-100 bg-gray-dark">
    <div class="container py-6">
        <div class="flex flex-row justify-around mt-6">
            <h1 class="text-center text-lg font-bold lg:text-2xl">Join 1,000+ other and never miss <br> out on new tips, tutorials, and more.</h1>
            <div>
                <form class="flex flex-wrap justify-between md:flex-row bg-white rounded-lg" method="post" name="newsletter" netlify>
                    <input type="hidden" name="newsletter" value="newsletter">
                    <input type="email" name="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email">
                    <button class="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
                </form>
            </div>
        </div>

        <hr class="h-px mt-6 bg-gray-700 border-none">

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div class="flex mt-4 md:m-0">
                <div class="-mx-4">
                  <a href="/episodes" class="px-4 text-sm">Episodes</a>
                  <a href="/blog" class="px-4 text-sm">Blog</a>
                  </div>
            </div>
        </div>
    </div>
</footer>