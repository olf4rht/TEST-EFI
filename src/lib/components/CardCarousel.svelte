<script lang="ts">
  import ColoredCard from './ColoredCard.svelte'

  export let title = 'latest projects & stories'
  export let projects: Array<{
    _id: string;
    title: string;
    subtitle?: string;
    colorTheme: string;
  }> = []

  let scrollContainer: HTMLDivElement

  function scrollLeft() {
    scrollContainer?.scrollBy({ left: -752, behavior: 'smooth' })
  }

  function scrollRight() {
    scrollContainer?.scrollBy({ left: 752, behavior: 'smooth' })
  }
</script>

<section class="px-6 py-[30px]">
  <div class="flex items-center justify-between mb-8">
    <span class="font-body font-medium text-[12px] leading-[20px] tracking-[1.1px] uppercase text-black">
      {title}
    </span>
    <div class="flex gap-2">
      <button on:click={scrollLeft} class="text-black hover:opacity-70" aria-label="Previous">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button on:click={scrollRight} class="text-black hover:opacity-70" aria-label="Next">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
  <div bind:this={scrollContainer} class="flex gap-[10px] overflow-x-auto scrollbar-hide">
    {#each projects as project (project._id)}
      <ColoredCard
        title={project.title}
        subtitle={project.subtitle}
        colorTheme={project.colorTheme}
      />
    {/each}
  </div>
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
