<!-- B"H -->

<script lang="ts">
    import StoryCard from '$lib/components/StoryCard.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
    const stories = data.stories;

</script>



<body>

    <div class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
        <div class="navbar bg-base-200">

            <div class="flex-1">
                <a href="/" class="btn btn-ghost text-xl">B"H</a>
            </div>
            
            <div class="flex-none">
                <a href="/" class="btn btn-ghost text-xl">CuentosJudios.com</a>
            </div>
    
        </div>
    </div>


    <br />

    <div class="flex flex-wrap">
        {#each stories as story}
            <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <StoryCard {story} />
            </div> 
        {/each}
    </div>

</body>
