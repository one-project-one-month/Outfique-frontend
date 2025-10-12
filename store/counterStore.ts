// src/store/counterStore.ts
import { create } from "zustand";

// 1. Define the shape of your state
export interface CounterState {
  count: number;
  // 2. Define the actions (functions to modify the state)
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 3. Create the store
export const useCounterStore = create<CounterState>((set) => ({
  // Initial state
  count: 0,

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Select the state and actions you need in components
// Import from the simplified index.ts path
// import { useCounterStore } from '../store';
//  const count = useCounterStore((state) => state.count);
//  const { increment, decrement, reset } = useCounterStore();

// ZUSTAND DOCUMENTATION REFERENCE
// https://zustand.docs.pmnd.rs/getting-started/introduction
