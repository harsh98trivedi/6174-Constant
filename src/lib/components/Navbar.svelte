<script lang="ts">
  import { toggleInfoModal } from '../store';
  import { triggerHaptic } from '../haptics';
  import logo from '../../images/logo.svg';
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-white/5 px-6 py-4">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <button 
      class="flex items-center gap-3 group transition-transform active:scale-95" 
      on:click={() => { 
        triggerHaptic('selection');
        window.scrollTo({top: 0, behavior: 'smooth'});
      }}
      aria-label="Scroll to top"
    >
      <img src={logo} alt="Logo" class="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
      <span class="text-xl font-display font-bold tracking-tight">
        6174<span class="text-primary">.constant</span>
      </span>
    </button>

    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#simulate" on:click={() => triggerHaptic('selection')} class="hover:text-white transition-colors">Simulate</a>
      <a href="#history" on:click={() => triggerHaptic('selection')} class="hover:text-white transition-colors">History</a>
    </div>

    <button 
      on:click={() => {
        triggerHaptic('medium');
        toggleInfoModal();
      }}
      class="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all border border-white/10 active:scale-95 glow-btn"
    >
      Read More
    </button>
  </div>
</nav>
