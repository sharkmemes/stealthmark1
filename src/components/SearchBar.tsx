import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by organization, game, event title, or date..."
            className="pl-10 pr-4 py-3 text-sm border-2 border-brand-gray/20 focus:border-primary transition-colors rounded-l-lg rounded-r-none"
          />
        </div>
        <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-l-none rounded-r-lg shadow-brand">
          Search
        </Button>
      </div>
    </div>
  );
};