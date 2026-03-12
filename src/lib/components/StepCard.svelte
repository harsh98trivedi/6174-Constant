<script lang="ts">
  import type { KaprekarStep } from '../logic';
  import { ArrowDownAZ, ArrowUpZA, Minus, Equal } from 'lucide-svelte';

  export let step: KaprekarStep;
  export let index: number;

  $: isConstant = step.result === 6174;
</script>

<div class="glass p-6 rounded-3xl space-y-6 relative overflow-hidden group hover:border-white/20 transition-all">
  <div class="absolute top-4 right-6 text-white/10 font-display font-black text-6xl select-none group-hover:text-white/20 transition-colors">
    {index + 1}
  </div>

  <div class="space-y-4 relative z-10">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-primary font-semibold text-sm">
        <ArrowDownAZ size={16} />
        Descending
      </div>
      <span class="text-2xl font-display font-bold tracking-widest">{step.sortedDesc}</span>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-secondary font-semibold text-sm">
        <ArrowUpZA size={16} />
        Ascending
      </div>
      <span class="text-2xl font-display font-bold tracking-widest">{step.sortedAsc}</span>
    </div>

    <div class="h-px bg-white/10 w-full"></div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-white/50 font-semibold text-sm">
        <Equal size={16} />
        Result
      </div>
      <span class="text-3xl font-display font-bold tracking-widest {isConstant ? 'text-accent' : 'text-white'}">
        {step.result.toString().padStart(4, '0')}
      </span>
    </div>
  </div>

  {#if isConstant}
    <div class="absolute inset-0 bg-accent/5 pointer-events-none border border-accent/30 rounded-3xl"></div>
  {/if}
</div>
