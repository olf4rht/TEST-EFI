<script lang="ts">
  export let label = ''
  export let title = ''
  export let body = ''
  export let ctaLabel = ''
  export let ctaUrl = ''
</script>

<section class="px-6 py-10">
  <div class="relative">
    {#if label}
      <span class="font-body font-medium text-[12px] leading-[20px] tracking-[1.1px] uppercase text-black">
        {label}
      </span>
    {/if}
    <div class="ml-[284px] flex flex-col gap-[25px] max-w-[665px]">
      <h2 class="font-heading font-normal text-[32px] leading-[42px] text-black">
        {title}
      </h2>
      {#if body}
        <p class="font-body text-[16px] leading-[29px] tracking-[0.75px] text-black">
          {body}
        </p>
      {/if}
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
</section>
