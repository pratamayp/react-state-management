import { create } from 'zustand';

const useZustandStore = create((set) => ({
  count: 0,
  setCount: (value) => set(() => ({ count: value })),
}));

export { useZustandStore }