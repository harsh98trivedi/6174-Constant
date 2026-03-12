<script lang="ts">
  import { showInfoModal, toggleInfoModal } from '../store';
  import { X, Info, Zap, HelpCircle } from 'lucide-svelte';
  import { fade, scale } from 'svelte/transition';
  import { triggerHaptic } from '../haptics';

  function close() {
    triggerHaptic('light');
    toggleInfoModal();
  }
</script>

{#if $showInfoModal}
  <div 
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-[100] flex justify-center items-start sm:items-center overflow-y-auto p-4 sm:p-6"
  >
    <!-- Backdrop -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
      on:click={close}
      class="absolute inset-0 bg-black/60 backdrop-blur-md"
    ></div>

    <!-- Modal Content -->
    <div 
      transition:scale={{ duration: 300, start: 0.95 }}
      class="relative w-full max-w-2xl my-auto glass rounded-[2rem] sm:rounded-[2.5rem] flex flex-col shadow-2xl border border-white/10 overflow-hidden"
    >
      <div class="p-6 sm:p-12 space-y-6 sm:space-y-8 custom-scrollbar">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="bg-primary/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
              <HelpCircle class="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold">Kaprekar's Constant</h2>
          </div>
          <button 
            on:click={close}
            class="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <X class="text-white/40 w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div class="space-y-4 sm:space-y-6 text-white/70 leading-relaxed text-base sm:text-lg">
          <p>
            Kaprekar's constant, also known as <span class="text-white font-bold">6174</span>, is a mathematical constant named after the Indian mathematician D.R. Kaprekar.
          </p>

          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-white font-display font-semibold flex items-center gap-2">
              <Zap class="text-secondary w-5 h-5" />
              How the routine works:
            </h3>
            <ol class="list-decimal list-inside space-y-2 ml-2 sm:ml-4">
              <li>Choose any four-digit number (at least two distinct digits).</li>
              <li>Arrange digits in descending and ascending order.</li>
              <li>Subtract the smaller number from the larger one.</li>
              <li>Repeat with the result.</li>
            </ol>
          </div>

          <p class="bg-accent/10 border border-accent/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-accent/90 italic text-sm sm:text-base">
            "No matter where you start, you will reach 6174 in at most 7 steps. Once reached, the routine will always result back to 6174."
          </p>
        </div>

        <button 
          on:click={close}
          class="w-full py-3 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl font-bold glow-btn transition-all active:scale-95 text-sm sm:text-base"
        >
          Got it, let's explore
        </button>
      </div>
    </div>
  </div>
{/if}
