<script lang="ts">
  export let siteTitle = 'Ethical Fashion Initiative'
  export let categories: Array<{
    label: string;
    items?: Array<{ label: string; url?: string }>;
  }> = []

  let menuOpen = true
</script>

<nav class="w-full px-6">
  <div class="flex items-center justify-between py-5">
    <button
      class="font-body font-semibold text-[16px] tracking-[0.75px] text-black"
      on:click={() => (menuOpen = !menuOpen)}
    >
      Menu
    </button>
    <h1 class="font-heading font-medium text-[32px] leading-[42px] text-black text-center">
      {siteTitle}
    </h1>
    <a href="/contact" class="font-body font-semibold text-[16px] tracking-[0.75px] text-black">
      Contact Us
    </a>
  </div>

  {#if menuOpen}
    <div class="pb-8">
      <div class="flex gap-[212px] justify-start pl-[5%]">
        {#each categories as category}
          <div class="flex flex-col">
            <span class="font-body font-medium text-[13px] tracking-[0.75px] text-black mb-3">
              {category.label}
            </span>
            {#if category.items}
              {#each category.items as item}
                <a
                  href={item.url || '#'}
                  class="font-body font-medium text-[13px] tracking-[0.75px] text-grey leading-[25px]"
                >
                  {item.label}
                </a>
              {/each}
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</nav>
