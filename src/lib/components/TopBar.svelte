<script lang="ts">
  export let links: Array<{ label: string; url?: string }> = []
</script>

<div class="bg-dark-blue h-[50px] w-full flex items-center justify-end px-6 gap-9">
  {#each links as link}
    <a href={link.url || '#'} class="flex items-center gap-1.5 text-white text-[13px] font-body tracking-[0.75px]">
      {link.label}
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  {/each}
</div>
