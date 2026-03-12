import { writable } from 'svelte/store';
import type { KaprekarStep } from './logic';

export interface SimulationState {
  currentInput: string;
  steps: KaprekarStep[];
  isSimulating: boolean;
  error: string | null;
}

export const simulationStore = writable<SimulationState>({
  currentInput: '',
  steps: [],
  isSimulating: false,
  error: null
});

export const showInfoModal = writable<boolean>(false);

export function setInput(val: string) {
  simulationStore.update(s => ({ ...s, currentInput: val, error: null }));
}

export function setError(msg: string | null) {
  simulationStore.update(s => ({ ...s, error: msg }));
}

export function toggleInfoModal() {
  showInfoModal.update(v => !v);
}

export function resetSimulation() {
  simulationStore.set({
    currentInput: '',
    steps: [],
    isSimulating: false,
    error: null
  });
}
