import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from 'i18next';

type Language = 'es' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: detectBrowserLanguage(),
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      }
    }),
    {
      name: 'app-lenguage',

      onRehydrateStorage : () => (state) => {
        if (!state?.language) return;
        
        if(i18n.isInitialized){
          i18n.changeLanguage(state.language);
        }else {
          i18n.on('initialized', () => {
            i18n.changeLanguage(state.language);
          })
        }
      }
    }
  )
)

function detectBrowserLanguage(): Language {
  if (typeof navigator !== 'undefined'){
    const lang = navigator.language.split('-')[0];
    return lang === 'es' ? 'es' : 'en';
  }
  return 'en';
}