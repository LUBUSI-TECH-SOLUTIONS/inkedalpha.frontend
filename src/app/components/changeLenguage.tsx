import { useLanguageStore } from "@/app/store/lenguageStateStore";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export const ChangeLanguage = () => {
  const { language, setLanguage } = useLanguageStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Globe className="h-4 w-4" />
          {language.toUpperCase()}
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