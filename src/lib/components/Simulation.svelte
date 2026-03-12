<script lang="ts">
  import { simulationStore } from '../store';
  import StepCard from './StepCard.svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { CheckCircle2 } from 'lucide-svelte';

  $: steps = $simulationStore.steps;
</script>

<section id="simulation" class="space-y-12 py-16">
  <div class="flex flex-col items-center text-center space-y-4">
    <h2 class="text-4xl font-display font-bold">Kaprekar's Routine</h2>
    <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    <p class="text-white/50 max-w-xl">
      Watch how the number transformations evolve. Each step sorts the digits in descending and ascending order, then finds the difference.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each steps as step, i}
      <div in:fly={{ y: 50, duration: 600, delay: i * 200 }}>
        <StepCard {step} index={i} />
      </div>
    {/each}

    {#if steps.length > 0 && steps[steps.length - 1].result === 6174}
      <div 
        in:scale={{ start: 0.9, opacity: 0, duration: 800, delay: steps.length * 200 }}
        class="lg:col-span-1 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 text-center"
      >
        <div class="bg-accent/20 p-4 rounded-full mb-4">
          <CheckCircle2 size={48} class="text-accent" />
        </div>
        <h3 class="text-3xl font-display font-bold text-accent">6174 Reached!</h3>
        <p class="text-accent/70 mt-2">The constant has been found in {steps.length} steps.</p>
      </div>
    {/if}
  </div>
</section>
