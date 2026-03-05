<script lang="ts">
  export let title = ''
  export let subtitle = ''
  export let colorTheme: string = 'blue'

  const themes: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-60', text: 'text-off-white' },
    green: { bg: 'bg-green', text: 'text-beige' },
    beige: { bg: 'bg-beige-10', text: 'text-green' },
    orange: { bg: 'bg-orange-500', text: 'text-white' },
    red: { bg: 'bg-red-600', text: 'text-white' },
    'light-blue': { bg: 'bg-sky-300', text: 'text-dark-blue' },
  }

  $: theme = themes[colorTheme] || themes.blue
</script>

<div class="w-[742px] h-[562px] rounded-[4px] flex flex-col justify-end px-[31px] py-[30px] shrink-0 {theme.bg}">
  <div class="flex flex-col gap-2 w-[400px]">
    {#if subtitle}
      <span class="font-body font-medium text-[12px] tracking-[1.08px] uppercase {theme.text}">
        {subtitle}
      </span>
    {/if}
    <h3 class="font-heading font-medium text-[32px] leading-[34px] {theme.text}">
      {title}
    </h3>
  </div>
</div>
