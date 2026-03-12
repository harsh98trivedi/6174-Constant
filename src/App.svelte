<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Simulation from './lib/components/Simulation.svelte';
  import History from './lib/components/History.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Modal from './lib/components/Modal.svelte';
  import { simulationStore } from './lib/store';
  import { onMount } from 'svelte';

  let scrollY = 0;
  
  $: hasSteps = $simulationStore.steps.length > 0;
</script>

<svelte:window bind:scrollY />

<div class="relative min-h-screen selection:bg-primary/30">
  <!-- Background Decorations -->
  <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div 
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"
      style="transform: translate({scrollY * 0.1}px, {scrollY * 0.05}px)"
    ></div>
    <div 
      class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[150px]"
      style="transform: translate({-scrollY * 0.05}px, {-scrollY * 0.1}px)"
    ></div>
  </div>

  <Navbar />

  <main class="container mx-auto px-4 pt-24 pb-12 space-y-32">
    <Hero />
    
    {#if hasSteps}
      <Simulation />
    {/if}

    <History />
  </main>

  <Footer />
  <Modal />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
