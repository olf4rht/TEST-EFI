<script lang="ts">
  export let label = 'spotlight'
  export let title = ''
  export let body = ''
  export let ctaLabel = 'READ MORE'
  export let ctaUrl = ''
  export let imageUrl = ''
  export let imageAlt = ''
</script>

<section class="bg-beige-10 px-6 py-[66px]">
  <div class="flex items-start justify-between gap-0">
    <div class="w-1/2 flex flex-col gap-1.5">
      <div class="w-full h-px bg-dark-blue mb-4"></div>
      <div class="flex flex-col gap-[34px] max-w-[665px]">
        <div class="flex flex-col gap-1">
          <span class="font-body font-medium text-[12px] leading-[20px] tracking-[1.1px] uppercase text-dark-blue">
            {label}
          </span>
          <h2 class="font-heading font-normal text-[32px] leading-[42px] text-dark-blue">
            {title}
          </h2>
        </div>
        <p class="font-body text-[16px] leading-[29px] tracking-[0.75px] text-dark-blue">
          {body}
        </p>
        {#if ctaLabel}
          <a
            href={ctaUrl || '#'}
            class="inline-flex items-center justify-center h-[30px] px-[10px] border border-dark-blue rounded-full font-body font-medium text-[12px] tracking-[1.1px] uppercase text-dark-blue w-fit"
          >
            {ctaLabel}
          </a>
        {/if}
      </div>
    </div>
    {#if imageUrl}
      <div class="w-1/2 h-[621px]">
        <img src={imageUrl} alt={imageAlt || ''} class="w-full h-full object-cover" />
      </div>
    {/if}
  </div>
</section>
