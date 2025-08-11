import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, MapPin, Calendar, Users, Trophy, Camera, QrCode, Upload } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('scores');

  // Mock event data - would come from API
  const event = {
    id: 1,
    title: "Manufacturers' Sports Day 2025",
    description: "Annual inter-company football tournament featuring teams from leading Manufacturers across Kenya.",
    date: "March 15, 2024",
    location: "Nairobi Sports Complex",
    participants: 120,
    status: "ongoing" as const,
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800",
    sport: "football"
  };

  // Mock live scores and standings
  const [standings, setStandings] = useState([
    { team: "TechCorp United", played: 4, won: 3, drawn: 1, lost: 0, points: 10, goalDiff: "+8" },
    { team: "Banking FC", played: 4, won: 3, drawn: 0, lost: 1, points: 9, goalDiff: "+5" },
    { team: "Insurance Stars", played: 4, won: 2, drawn: 1, lost: 1, points: 7, goalDiff: "+2" },
    { team: "Telecom Tigers", played: 4, won: 2, drawn: 0, lost: 2, points: 6, goalDiff: "0" },
    { team: "Energy Eagles", played: 4, won: 1, drawn: 0, lost: 3, points: 3, goalDiff: "-3" },
    { team: "Mining Miners", played: 4, won: 0, drawn: 0, lost: 4, points: 0, goalDiff: "-12" }
  ]);

  const [recentGames, setRecentGames] = useState([
    { id: 1, team1: "TechCorp United", team2: "Banking FC", score1: 2, score2: 1, status: "Final", time: "90'" },
    { id: 2, team1: "Insurance Stars", team2: "Telecom Tigers", score1: 1, score2: 0, status: "Live", time: "78'" },
    { id: 3, team1: "Energy Eagles", team2: "Mining Miners", score1: 0, score2: 0, status: "HT", time: "45'" }
  ]);

  const [photos, setPhotos] = useState([
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300",
    "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300",
    "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300"
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update scores for live games
      setRecentGames(prev => prev.map(game => {
        if (game.status === "Live" && Math.random() > 0.8) {
          const newTime = Math.min(parseInt(game.time) + 1, 90);
          return { ...game, time: `${newTime}'` };
        }
        return game;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-red-500';
      case 'Final': return 'bg-green-500';
      case 'HT': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/events" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <Badge variant={event.status === 'ongoing' ? 'default' : 'secondary'}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {event.participants} participants
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="mr-2 h-5 w-5" />
                  Event QR Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 bg-muted mx-auto rounded-lg flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-muted-foreground" />
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Scan to share event
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Upload Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Event Photos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scores">Live Scores</TabsTrigger>
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="scores" className="space-y-6">
            <div className="grid gap-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Trophy className="mr-2 h-5 w-5" />
                Recent & Live Games
              </h3>
              
              <div className="grid gap-4">
                {recentGames.map((game) => (
                  <Card key={game.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{game.team1}</span>
                          <span className="text-2xl font-bold">{game.score1}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{game.team2}</span>
                          <span className="text-2xl font-bold">{game.score2}</span>
                        </div>
                      </div>
                      <div className="text-center ml-6">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs ${getStatusColor(game.status)}`}>
                          {game.status}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{game.time}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="standings" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tournament Standings</h3>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Position</th>
                          <th className="text-left p-4">Team</th>
                          <th className="text-center p-4">P</th>
                          <th className="text-center p-4">W</th>
                          <th className="text-center p-4">D</th>
                          <th className="text-center p-4">L</th>
                          <th className="text-center p-4">GD</th>
                          <th className="text-center p-4">Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standings.map((team, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="p-4 font-bold">{index + 1}</td>
                            <td className="p-4 font-medium">{team.team}</td>
                            <td className="text-center p-4">{team.played}</td>
                            <td className="text-center p-4">{team.won}</td>
                            <td className="text-center p-4">{team.drawn}</td>
                            <td className="text-center p-4">{team.lost}</td>
                            <td className="text-center p-4">{team.goalDiff}</td>
                            <td className="text-center p-4 font-bold">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Event Photo Gallery</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="aspect-square">
                    <img 
                      src={photo} 
                      alt={`Event photo ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              
              <Card className="p-6 text-center border-dashed">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Share Your Photos</h4>
                <p className="text-muted-foreground mb-4">
                  Upload photos from the event to share with other participants
                </p>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photos
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventDetail;