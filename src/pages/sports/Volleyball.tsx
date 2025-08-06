import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Calendar } from 'lucide-react';

const Volleyball = () => {
  const standings = [
    { position: 1, team: 'Coca Cola Spikers', played: 4, won: 4, lost: 0, setsWon: 12, setsLost: 2, points: 12 },
    { position: 2, team: 'KenGen Thunders', played: 4, won: 3, lost: 1, setsWon: 10, setsLost: 5, points: 9 },
    { position: 3, team: 'Safaricom Aces', played: 4, won: 2, lost: 2, setsWon: 8, setsLost: 8, points: 6 },
    { position: 4, team: 'EABL Brewers', played: 4, won: 1, lost: 3, setsWon: 5, setsLost: 10, points: 3 },
    { position: 5, team: 'BAT Smashers', played: 4, won: 0, lost: 4, setsWon: 3, setsLost: 12, points: 0 },
  ];

  const fixtures = [
    {
      id: 1,
      homeTeam: 'Coca Cola Spikers',
      awayTeam: 'KenGen Thunders',
      sets: '3-1',
      score: '25-23, 22-25, 25-18, 25-20',
      status: 'completed',
      mvp: { name: 'Sarah Johnson', company: 'Coca Cola' }
    },
    {
      id: 2,
      homeTeam: 'Safaricom Aces',
      awayTeam: 'EABL Brewers',
      sets: '3-0',
      score: '25-15, 25-18, 25-12',
      status: 'completed',
      mvp: { name: 'Mary Wanjiku', company: 'Safaricom' }
    },
    {
      id: 3,
      homeTeam: 'BAT Smashers',
      awayTeam: 'Coca Cola Spikers',
      sets: '1-3',
      score: '18-25, 25-23, 20-25, 19-25',
      status: 'completed',
      mvp: { name: 'Grace Muthoni', company: 'Coca Cola' }
    },
    {
      id: 4,
      homeTeam: 'KenGen Thunders',
      awayTeam: 'Safaricom Aces',
      sets: null,
      score: null,
      status: 'upcoming',
      mvp: null
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge variant="secondary">Completed</Badge>;
      case 'live': return <Badge className="bg-green-500">Live</Badge>;
      case 'upcoming': return <Badge variant="outline">Upcoming</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/events/1" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Manufacturers' Sports Day 2025
          </a>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-foreground">Volleyball </span>
            <span className="text-primary">Tournament</span>
          </h1>
          <p className="text-muted-foreground">Standings and match results</p>
        </div>

        <Tabs defaultValue="standings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures & Results</TabsTrigger>
          </TabsList>

          <TabsContent value="standings" className="space-y-6">
            <div className="bg-card rounded-lg shadow-card-custom p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                League Standings
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pos</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-center">P</TableHead>
                    <TableHead className="text-center">W</TableHead>
                    <TableHead className="text-center">L</TableHead>
                    <TableHead className="text-center">Sets Won</TableHead>
                    <TableHead className="text-center">Sets Lost</TableHead>
                    <TableHead className="text-center">Pts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {standings.map((team) => (
                    <TableRow key={team.position} className={team.position <= 3 ? "bg-yellow-50 dark:bg-yellow-950" : ""}>
                      <TableCell className="font-medium">{team.position}</TableCell>
                      <TableCell className="font-semibold">{team.team}</TableCell>
                      <TableCell className="text-center">{team.played}</TableCell>
                      <TableCell className="text-center">{team.won}</TableCell>
                      <TableCell className="text-center">{team.lost}</TableCell>
                      <TableCell className="text-center">{team.setsWon}</TableCell>
                      <TableCell className="text-center">{team.setsLost}</TableCell>
                      <TableCell className="text-center font-bold">{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                <span className="inline-block w-4 h-4 bg-yellow-100 dark:bg-yellow-950 rounded mr-2"></span>
                Top 3 teams advance to playoffs
              </p>
            </div>
          </TabsContent>

          <TabsContent value="fixtures" className="space-y-6">
            <div className="bg-card rounded-lg shadow-card-custom p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Fixtures & Results
              </h2>
              <div className="space-y-6">
                {fixtures.map((match) => (
                  <div key={match.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="font-semibold">{match.homeTeam}</div>
                          {match.sets && (
                            <div className="text-lg font-bold text-primary">{match.sets.split('-')[0]}</div>
                          )}
                        </div>
                        <div className="text-muted-foreground">vs</div>
                        <div className="text-center">
                          <div className="font-semibold">{match.awayTeam}</div>
                          {match.sets && (
                            <div className="text-lg font-bold text-primary">{match.sets.split('-')[1]}</div>
                          )}
                        </div>
                      </div>
                      {getStatusBadge(match.status)}
                    </div>
                    
                    {match.status === 'completed' && (
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-2">Set Scores:</h4>
                          <p className="text-muted-foreground">{match.score}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Player of the Match:</h4>
                          <p className="text-muted-foreground">
                            🏆 {match.mvp?.name} ({match.mvp?.company})
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Volleyball;