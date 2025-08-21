// src/store/uiStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark' | 'system';
type Language = 'vi' | 'en';

type UIStore = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
};

const useUIStore = create<UIStore>()(
  persist(
    set => ({
      isSidebarOpen: true,
      toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
      themeMode: 'system',
      setThemeMode: mode => set({ themeMode: mode }),
      language: 'vi', // Mặc định tiếng Việt
      setLanguage: lang => set({ language: lang }),
    }),
    {
      name: 'ui-store',
      partialize: state => ({ themeMode: state.themeMode, language: state.language }),
    }
  )
);

export default useUIStore;
