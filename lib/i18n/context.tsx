"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  Language,
  translations,
  TranslationDict,
  DictKey,
} from "./dict";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: DictKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "language-storage";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  // Try to get from localStorage
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.state?.language) {
        return parsed.state.language as Language;
      }
    } catch {
      // Ignore parse errors
    }
  }

  // Detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("ko")) return "ko";
  return "en";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLanguageState(getInitialLanguage());
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ state: { language: lang } })
      );
    }
  }, []);

  const t = useCallback(
    (key: DictKey): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    [language]
  );

  // Always provide context to prevent "useLanguage must be used within a LanguageProvider" error
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
