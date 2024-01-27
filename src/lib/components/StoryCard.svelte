<!-- B"H -->
<!-- StoryCard component -->

<script lang="ts">
    import type { Story } from '$lib/types'; 
    export let story: Story;
</script>

<body>

   <div class="card card-bordered w-96 bg-base-100 shadow-xl">
         <div class="card-body">
             <h2 class="card-title"> {story.name} </h2>
 
             <figure>
             <img src={story.image}
             alt={story.alt}
             />
             </figure>
 
             <audio
                 preload="none"
                 id="player"
                 src={story.audio}
                 controls
                 >
             </audio>
 
             <div class="collapse bg-base-200">
                 <input type="checkbox" /> 
                 <div class="collapse-title font-medium">
                     >> Leer el cuento
                 </div>
                
                 <div class="collapse-content"> 
                    {@html story.text}
                </div>
            </div>
        </div>
    </div>
    <br />
</body>



<style>
    #player {
    width: 100%;
    }
</style>   
