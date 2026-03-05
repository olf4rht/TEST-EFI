<script lang="ts">
  export let leadText = ''
  export let body = ''
</script>

<section class="px-[450px] py-[70px]">
  <p class="font-body text-[16px] leading-[29px] tracking-[0.75px] text-black">
    {#if leadText}<span class="font-semibold">{leadText} </span>{/if}<span>{body}</span>
  </p>
</section>
