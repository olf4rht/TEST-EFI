<script lang="ts">
  export let label = ''
  export let headline = ''
  export let body = ''
  export let ctaLabel = ''
  export let ctaUrl = ''
  export let imageUrl = ''
  export let imageAlt = ''
</script>

<section>
  <div class="flex gap-[95px] items-start px-6 py-[50px]">
    <div class="flex flex-col gap-1 w-[615px] shrink-0">
      {#if label}
        <span class="font-body font-medium text-[12px] leading-[20px] tracking-[1.1px] uppercase text-black">
          {label}
        </span>
      {/if}
      <h2 class="font-heading font-normal text-[32px] leading-[42px] text-black">
        {headline}
      </h2>
    </div>
    <div class="flex flex-col gap-[22px] max-w-[665px]">
      <p class="font-body text-[16px] leading-[29px] tracking-[0.75px] text-black">
        {body}
      </p>
      {#if ctaLabel}
        <a
          href={ctaUrl || '#'}
          class="inline-flex items-center justify-center h-[30px] px-[10px] bg-grey-10 rounded-full font-body font-medium text-[12px] tracking-[1.1px] uppercase text-black w-fit"
        >
          {ctaLabel}
        </a>
      {/if}
    </div>
  </div>

  {#if imageUrl}
    <div class="w-full h-[878px] overflow-hidden">
      <img src={imageUrl} alt={imageAlt || ''} class="w-full h-full object-cover" />
    </div>
  {/if}
</section>
