"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { Language, languageNames, languageFlags } from "@/lib/i18n/dict";
import { useEffect, useState } from "react";

const ICON_SIZE = 16;

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const languages: Language[] = ["en", "zh", "ja", "ko"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={"sm"}
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Languages
            size={ICON_SIZE}
            className="text-muted-foreground"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(value) => setLanguage(value as Language)}
        >
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang}
              className="flex gap-2"
              value={lang}
            >
              <span>{languageFlags[lang]}</span>
              <span>{languageNames[lang]}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
