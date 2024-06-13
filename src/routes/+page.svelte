<script lang="ts">

  import Weather from "$lib/Weather.svelte";
  import SVG_art from "$lib/SVG.svelte";
  import Kanade from "$lib/Kanade.svelte";
  import Mona from "$lib/Mona.svelte";
  import Recycle from "$lib/Recycle.svelte";
  import Tona from "$lib/Tona.svelte";
  import WebGpu from "$lib/WebGpu.svelte";

</script>

<main class="bg-black text-red-600 py-4 px-4 h-screen font-mono ">
  
  <div class="grid grid-cols-3 gap-3 h-full">

    <!-- ///////////////////////////////////////
    //////////////////////////////////////
    ///////////////////////////////////// -->
    <!-- div 1 main -->

    <div class="grid-rows-2 space-y-3 rounded flex flex-col ">

      <!-- div 1a -->
      <div class="text-rose-500 font-mono px-8 py-8 rounded border-2 border-dashed border-red-950 h-[60%]"> <Tona/> </div>
      <!-- div 1b -->
      <div class="rounded border-2  border-dashed border-red-950  h-[40%]">

      </div>

    </div>

    <!-- ///////////////////////////////////////
    //////////////////////////////////////
    ///////////////////////////////////// -->

    <!-- div 2 main  -->
    <div class="grid-rows-3 space-y-3 rounded flex flex-col ">


    <!-- div 2a -->
    <div class=" text-slate-300 px-5 py-5  rounded border-2 border-dashed border-red-950 text-md" > 
      <p class="animate-bounce text-red-600 ">habagat season 2024</p>

    </div>
    <!-- div 2b -->
    <div class="rounded border-2 border-dashed border-red-950 text-sky-800 px-5 py-5 h-fit flex-1"> <Mona/>  </div>

    </div>

    <!-- ///////////////////////////////////////
    //////////////////////////////////////
    ///////////////////////////////////// -->

    <!-- div 3 -->
    <div class="grid-rows-2 space-y-3 gap-3 rounded flex flex-col">


      <!-- div 3a -->
      <div class=" grid grid-cols-2 space-x-3 rounded  flex-col">
    
      <!-- div 3a_1 -->
      <div class="rounded border-2 border-dashed text-red-600 border-red-950  px-5 py-5 h-fit flex-1"> <Weather /></div>
      <!-- div 3a_2 -->
      <div class="rounded border-2 border-dashed border-red-950  px-5 py-5   flex items-center justify-center"> <Recycle/>  </div>
        
      </div>


      <!-- div 3b -->
      <div
        class="text-rose-500 font-mono px-8 py-8 rounded border-2 border-dashed border-red-950 flex-2"
      >
        <SVG_art></SVG_art>
      </div>


      <!-- div 3c -->
      <div
        class="rounded border-2 border-dashed border-red-950 text-sky-800 px-5 py-5 h-fit flex-1"
      >
        <Kanade />
      </div>



    </div>
  </div>
</main>

<style>
</style>
