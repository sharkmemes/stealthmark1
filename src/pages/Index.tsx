import { Header } from '@/components/Header';
import { TypingText } from '@/components/TypingText';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Users, Target, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import heroBg from '@/assets/hero-sports-bg.jpg';

const Index = () => {
  const events = [
    {
      id: 1,
      title: "Manufacturers' Sports Day 2025",
      description: "Annual multi-sport tournament bringing together manufacturers across Kenya",
      date: "March 15, 2025",
      location: "Nairobi Sports Complex",
      status: "upcoming" as const,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Company Logo & Tagline */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/ab6fbc74-c142-4fbf-b5a8-0838c07f32c3.png" 
                alt="Stealth Mark Africa" 
                className="h-20 md:h-28 w-auto mx-auto mb-4 bg-white"
              />
              <p className="text-lg md:text-xl text-white/80 italic">
                "Excellence in Corporate Sports Management"
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Real-Time </span>
              <TypingText 
                text="Sports Results" 
                className="text-primary"
                delay={150}
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your premier platform for live tournament proceedings, real-time results, 
              and comprehensive points tracking for corporate sports events.
            </p>
            
            {/* Events Dropdown */}
            <div className="mb-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand">
                    View Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80">
                  {events.map((event) => (
                    <DropdownMenuItem key={event.id} asChild>
                      <a href={`/events/${event.id}`} className="flex flex-col items-start p-4">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </span>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Company Bio & Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">About </span>
                <span className="text-primary">Stealth Mark Africa</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Leading provider of comprehensive sports management solutions across Kenya and East Africa. 
                We specialize in corporate sports events, real-time scoring systems, and tournament management 
                that brings organizations together through the power of sport.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Results</h3>
                <p className="text-muted-foreground">
                  Live scoring systems and instant updates keep participants and spectators engaged throughout events.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tournament Management</h3>
                <p className="text-muted-foreground">
                  Complete tournament organization from planning to execution with professional oversight.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Points Tracking</h3>
                <p className="text-muted-foreground">
                  Comprehensive points tally systems ensuring fair competition and transparent results.
                </p>
              </div>
            </div>

            {/* Platform Purpose */}
            <div className="text-center bg-gradient-card p-8 rounded-lg shadow-card-custom">
              <h3 className="text-2xl font-bold mb-4 text-primary">Platform Purpose</h3>
              <p className="text-lg text-muted-foreground">
                This platform serves as your central hub for accessing real-time tournament proceedings, 
                live match results, comprehensive points tallies, and all essential tournament information. 
                Stay connected with every moment of the action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Get In </span>
                <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to organize your next corporate sports event? Contact us today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+254 700 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@stealthmarkafrica.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-card-custom">
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Corporate Sports Events
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Tournament Management
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Real-Time Scoring Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Points Tracking & Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Event Photography & Media
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
