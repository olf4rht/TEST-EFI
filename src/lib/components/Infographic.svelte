<script lang="ts">
  export let title = ''
  export let imageUrl = ''
  export let imageAlt = ''
</script>

<section class="px-12 py-6">
  {#if imageUrl}
    <img src={imageUrl} alt={imageAlt || title} class="w-full h-auto rounded" />
  {/if}
</section>
