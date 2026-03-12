<script lang="ts">
  import { triggerHaptic } from '../haptics';
</script>

<footer id="resources" class="border-t border-white/5 py-12 mt-32">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="space-y-4 text-center md:text-left">
        <div class="text-xl font-display font-bold tracking-tight">
          6174<span class="text-primary">.constant</span>
        </div>
        <p class="text-white/40 text-sm max-w-xs">
          An interactive tribute to the beauty of number theory and the work of D.R. Kaprekar.
        </p>
      </div>

      <div class="text-white/60 text-sm font-medium">
        Made with ❤️ by <a 
          href="https://harsh98trivedi.github.io" 
          target="_blank" 
          on:click={() => triggerHaptic('selection')}
          class="text-primary hover:text-secondary transition-colors decoration-dotted underline decoration-primary/30 underline-offset-4"
        >
          Harsh Trivedi
        </a>
      </div>
    </div>
  </div>
</footer>
