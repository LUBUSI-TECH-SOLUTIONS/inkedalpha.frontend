import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { t } from "i18next"
import { SearchIcon } from "lucide-react"

export const Search = () => {
  return (
    <div className="hiden md:flex items-center space-x-2">
      <Input 
        type="search"
        placeholder={t('header.Search')}
        className="w-40 bg-black/50 border-ink-500 focus:border-ink-600 font-family-heading"
      />
      <Button variant="ghost" size="icon">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  )

}