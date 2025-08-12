import { useLanguageStore } from "@/app/store/lenguageStateStore";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";

export const ChangeLanguage = () => {
  const { language, setLanguage } = useLanguageStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {language.toUpperCase()}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="font-semibold"
            onSelect={() => setLanguage('es')}
          >
            <span className="text-xs">
              Es
            </span>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem
            className="font-semibold"
            onSelect={() => setLanguage('en')}
          >
            <span className="text-xs">
              En
            </span>
            English
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}