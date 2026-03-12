<script lang="ts">
  import { Info, History as HistoryIcon, GraduationCap, ExternalLink, Zap } from 'lucide-svelte';
</script>

<section id="history" class="space-y-16">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div class="space-y-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">
        <HistoryIcon size={14} />
        Mathematical Legacy
      </div>
      <h2 class="text-4xl md:text-5xl font-display font-bold leading-tight">
        Who was <span class="text-secondary">D. R. Kaprekar?</span>
      </h2>
      <p class="text-white/60 leading-relaxed text-lg">
        Dattatreya Ramchandra Kaprekar (1905–1986) was an Indian recreational mathematician who described several classes of natural numbers, including the Kaprekar, Harshad and Self numbers.
      </p>
      <p class="text-white/60 leading-relaxed text-lg">
        In 1949, he discovered the property of 6174, now known as <strong>Kaprekar's Constant</strong>. He was a schoolteacher in Nashik, and despite having no formal postgraduate mathematical training, he published extensively and became well-known in recreational mathematics circles.
      </p>
      
      <div class="flex flex-wrap gap-4 pt-4">
        <a 
          href="https://en.wikipedia.org/wiki/6174_(number)" 
          target="_blank"
          class="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"
        >
          Wikipedia <ExternalLink size={14} />
        </a>
        <a 
          href="https://mathworld.wolfram.com/KaprekarRoutine.html" 
          target="_blank"
          class="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"
        >
          Wolfram MathWorld <ExternalLink size={14} />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="glass p-8 rounded-3xl space-y-4">
        <div class="bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center">
          <GraduationCap class="text-primary" />
        </div>
        <h4 class="text-xl font-bold font-display">The Rule</h4>
        <p class="text-white/50 text-sm">
          The constant is reached for any four-digit number where not all digits are equal.
        </p>
      </div>
      
      <div class="glass p-8 rounded-3xl space-y-4">
        <div class="bg-secondary/20 w-12 h-12 rounded-2xl flex items-center justify-center">
          <Info class="text-secondary" />
        </div>
        <h4 class="text-xl font-bold font-display">7 Steps</h4>
        <p class="text-white/50 text-sm">
          The maximum number of steps ever required to reach 6174 is only 7.
        </p>
      </div>
      
      <div class="glass p-8 rounded-3xl space-y-4 sm:col-span-2">
        <div class="bg-accent/20 w-12 h-12 rounded-2xl flex items-center justify-center">
          <Zap class="text-accent" />
        </div>
        <h4 class="text-xl font-bold font-display">Self-referencing</h4>
        <p class="text-white/50 text-sm">
          Once 6174 is reached, the routine will always result in 6174: 7641 - 1467 = 6174. It's a "fixed point" of the mapping.
        </p>
      </div>
    </div>
  </div>
</section>
