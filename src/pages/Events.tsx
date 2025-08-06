import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '@/components/Pagination';
import { Header } from '@/components/Header';
import { EventCard } from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Filter, Calendar, MapPin, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'ended'>('all');
  const [selectedSport, setSelectedSport] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const allEvents = [
    {
      id: 1,
      title: "Corporate Football Championship",
      description: "Annual inter-company football tournament featuring teams from leading corporations across Africa.",
      date: "March 15, 2024",
      location: "Nairobi Sports Complex",
      participants: 120,
      status: "upcoming" as const,
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500",
      sport: "football"
    },
    {
      id: 2,
      title: "Executive Basketball League",
      description: "High-intensity basketball matches between executive teams from major companies.",
      date: "March 8, 2024",
      location: "Lagos Arena",
      participants: 80,
      status: "ongoing" as const,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
      sport: "basketball"
    },
    {
      id: 3,
      title: "Tech Companies Volleyball",
      description: "Exciting volleyball competition exclusively for technology companies.",
      date: "February 28, 2024",
      location: "Cape Town Beach",
      participants: 60,
      status: "ended" as const,
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500",
      sport: "volleyball"
    },
    {
      id: 4,
      title: "Banking Sector Tennis Open",
      description: "Premium tennis tournament for banking and financial services professionals.",
      date: "April 2, 2024",
      location: "Johannesburg Club",
      participants: 40,
      status: "upcoming" as const,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500",
      sport: "tennis"
    },
    {
      id: 5,
      title: "Corporate Cricket Cup",
      description: "Elite cricket championship for corporate teams across East Africa.",
      date: "March 20, 2024",
      location: "Kampala Cricket Oval",
      participants: 96,
      status: "upcoming" as const,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500",
      sport: "cricket"
    },
    {
      id: 6,
      title: "Financial Services Rugby League",
      description: "Competitive rugby matches between leading financial institutions.",
      date: "February 15, 2024",
      location: "Durban Rugby Stadium",
      participants: 150,
      status: "ended" as const,
      image: "https://images.unsplash.com/photo-1602327114156-ac7cfc9c9dcb?w=500",
      sport: "rugby"
    }
  ];

  const sports = ['all', 'football', 'basketball', 'volleyball', 'tennis', 'cricket', 'rugby'];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    const matchesSport = selectedSport === 'all' || event.sport === selectedSport;
    
    return matchesSearch && matchesStatus && matchesSport;
  });

  const getStatusCount = (status: string) => {
    if (status === 'all') return allEvents.length;
    return allEvents.filter(event => event.status === status).length;
  };

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            <div className="bg-gradient-card p-6 rounded-lg shadow-card-custom">
              <Link to="/events/create">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand mb-6">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Event
                </Button>
              </Link>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                    <Search className="inline mr-2 h-4 w-4" />
                    Search Events
                  </Label>
                  <Input
                    id="search"
                    placeholder="Search by title, location, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    <Filter className="inline mr-2 h-4 w-4" />
                    Event Status
                  </Label>
                  <div className="space-y-2">
                    {(['all', 'upcoming', 'ongoing', 'ended'] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                          selectedStatus === status 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span className="capitalize">{status}</span>
                        <Badge variant="secondary" className="text-xs">
                          {getStatusCount(status)}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-sm font-medium mb-3 block">Sport Type</Label>
                  <div className="space-y-2">
                    {sports.map((sport) => (
                      <button
                        key={sport}
                        onClick={() => setSelectedSport(sport)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors capitalize ${
                          selectedSport === sport 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {sport}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">All </span>
                <span className="text-primary">Events</span>
              </h1>
              <p className="text-muted-foreground">
                Discover and participate in corporate sports events across Africa
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-card p-4 rounded-lg shadow-card-custom text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{getStatusCount('upcoming')}</div>
                <div className="text-sm text-muted-foreground">Upcoming</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg shadow-card-custom text-center">
                <div className="h-6 w-6 bg-orange-500 rounded-full mx-auto mb-2"></div>
                <div className="text-2xl font-bold">{getStatusCount('ongoing')}</div>
                <div className="text-sm text-muted-foreground">Ongoing</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg shadow-card-custom text-center">
                <div className="h-6 w-6 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="text-2xl font-bold">{getStatusCount('ended')}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg shadow-card-custom text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {allEvents.reduce((sum, event) => sum + event.participants, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Participants</div>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}

            {paginatedEvents.length === 0 && filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Events;