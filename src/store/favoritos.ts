import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Mob } from '../types/mob';

interface FavoritosState {
  favoritos: Mob[];
  agregar: (mob: Mob) => void;
  quitar: (id: string) => void;
}

export const useFavoritos = create<FavoritosState>()(
  persist(
    (set) => ({
      favoritos: [],
      agregar: (mob) => set((s) => ({ favoritos: [...s.favoritos, mob] })),
      quitar: (id) => set((s) => ({ favoritos: s.favoritos.filter((f) => f.id !== id) })),
    }),
    { name: 'favoritos' }
  )
);
