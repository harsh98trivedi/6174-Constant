<script lang="ts">
  import { simulationStore, setInput, setError } from '../store';
  import { isValidKaprekarInput, runKaprekarRoutine } from '../logic';
  import { ArrowRight, RefreshCw, Zap } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { triggerHaptic } from '../haptics';

  let inputValue = '';
  
  function handleInput(e: Event) {
    const val = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 4);
    inputValue = val;
    setInput(val);
    if (val.length === 4) triggerHaptic('selection');
  }

  function startSimulation() {
    if (!inputValue) {
      triggerHaptic('warning');
      setError("Please enter a 4-digit number");
      return;
    }

    triggerHaptic('medium');
    const validation = isValidKaprekarInput(inputValue);
    
    if (!validation.valid) {
      triggerHaptic('error');
      setError(validation.error || "Invalid input");
      return;
    }

    const num = parseInt(inputValue);
    const steps = runKaprekarRoutine(num);
    simulationStore.update(s => ({ ...s, steps, isSimulating: true, error: null }));
    
    // Scroll to simulation
    setTimeout(() => {
      document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  let isAnimating = false;

  async function randomNum() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Lottery animation
    const duration = 1500;
    const interval = 50;
    const steps = duration / interval;
    
    for (let i = 0; i < steps; i++) {
      const tempNum = Math.floor(1000 + Math.random() * 9000).toString();
      inputValue = tempNum;
      triggerHaptic('light');
      await new Promise(r => setTimeout(r, interval));
    }

    let finalNum;
    do {
      finalNum = Math.floor(1000 + Math.random() * 9000);
    } while (!isValidKaprekarInput(finalNum).valid);
    
    inputValue = finalNum.toString().padStart(4, '0');
    setInput(inputValue);
    triggerHaptic('medium');
    isAnimating = false;
    startSimulation();
  }
</script>

<section id="simulate" class="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 max-w-4xl mx-auto">
  <div in:fly={{ y: 20, duration: 800 }} class="space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
      <Zap size={14} />
      Interactive Discovery
    </div>
    <h1 class="text-7xl md:text-9xl font-display font-extrabold tracking-tighter leading-[0.9]">
      Unveil the Magic of <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary via-secondary to-accent">6174</span>
    </h1>
    <p class="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
      Explore the mystical routine where every 4-digit number converges to a single fixed point.
    </p>
  </div>

  <div in:fly={{ y: 20, duration: 800, delay: 200 }} class="w-full max-w-md space-y-4">
    <div class="relative group">
      <input 
        type="text" 
        placeholder="Enter a 4-digit number"
        value={inputValue}
        on:input={handleInput}
        on:keydown={(e) => e.key === 'Enter' && startSimulation()}
        class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-2xl font-display font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-center tracking-[0.5em] placeholder:tracking-normal placeholder:text-white/20"
      />
      
      <div class="absolute inset-0 rounded-2xl bg-primary/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
    </div>

    {#if $simulationStore.error}
      <p transition:fade class="text-red-400 text-sm font-medium">{$simulationStore.error}</p>
    {/if}

    <div class="flex gap-3 h-14">
      <button 
        on:click={startSimulation}
        class="flex-1 glow-btn bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2"
      >
        Calculate Routines
        <ArrowRight size={20} />
      </button>
      
      <button 
        on:click={randomNum}
        disabled={isAnimating}
        class="aspect-square bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center border border-white/10 transition-colors disabled:opacity-50"
        title="Random Number"
      >
        <RefreshCw size={22} class="text-white/70 {isAnimating ? 'animate-spin' : ''}" />
      </button>
    </div>
  </div>
</section>
