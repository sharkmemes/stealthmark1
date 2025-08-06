import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowRight, Calendar, MapPin, Users, Trophy, FileText, Target } from 'lucide-react';

const ManufacturersSportsDay = () => {
  const sports = [
    { name: 'Football', href: '/sports/football' },
    { name: 'Volleyball', href: '/sports/volleyball' },
    { name: 'Netball', href: '/sports/netball' },
    { name: 'Basketball', href: '/sports/basketball' },
    { name: 'Athletics', href: '/sports/athletics' },
    { name: 'Indoor Games', href: '/sports/indoor-games' },
    { name: 'Auxiliary', href: '/sports/auxiliary' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Manufacturers' </span>
              <span className="text-primary">Sports Day 2025</span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Nairobi Sports Complex</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>50+ Companies</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The premier annual multi-sport tournament bringing together manufacturers from across Kenya 
              for a day of competition, networking, and celebration of industry excellence.
            </p>

            {/* Partner Logo */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">In Partnership With</p>
              <div className="bg-background p-4 rounded-lg shadow-card-custom inline-block">
                <span className="text-2xl font-bold text-primary">KAM</span>
                <p className="text-xs text-muted-foreground">Kenya Association of Manufacturers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Event </span>
            <span className="text-primary">Navigation</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Activities */}
            <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Activities</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Choose Sport
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {sports.map((sport) => (
                    <DropdownMenuItem key={sport.name} asChild>
                      <a href={sport.href} className="w-full">
                        {sport.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Points & Results */}
            <div className="space-y-4">
              <a href="/overall-points" className="block">
                <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom hover:shadow-lg transition-shadow h-32 flex flex-col justify-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Overall Points Tally</h3>
                  <p className="text-sm text-muted-foreground">Live tournament standings</p>
                </div>
              </a>
              
              <a href="/participation-points" className="block">
                <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom hover:shadow-lg transition-shadow h-32 flex flex-col justify-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Participation Points</h3>
                  <p className="text-sm text-muted-foreground">Engagement tracking</p>
                </div>
              </a>
            </div>

            {/* Rules & Information */}
            <div className="space-y-4">
              <a href="/tournament-rules" className="block">
                <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom hover:shadow-lg transition-shadow h-32 flex flex-col justify-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tournament Rules</h3>
                  <p className="text-sm text-muted-foreground">Competition guidelines</p>
                </div>
              </a>
              
              <a href="/points-awarding" className="block">
                <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom hover:shadow-lg transition-shadow h-32 flex flex-col justify-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Points System</h3>
                  <p className="text-sm text-muted-foreground">Scoring criteria & table</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-primary">Tournament Overview</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-background rounded-lg shadow-card-custom">
                <div className="text-2xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-muted-foreground">Sports Categories</div>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card-custom">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Participating Companies</div>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card-custom">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Athletes</div>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-card-custom">
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Hours of Action</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturersSportsDay;