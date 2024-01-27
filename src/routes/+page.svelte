<script lang="ts">
    import { stories } from '$lib/stories/index.ts';
    import StoryCard from '$lib/components/StoryCard.svelte';


</script>

<body>

    <br />
    <h1>B"H</h1>

    <div class="flex flex-wrap">
        {#each stories as story}
            <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <StoryCard {story} />
            </div> 
        {/each}
    </div>

</body>
