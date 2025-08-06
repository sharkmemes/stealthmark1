import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Users } from 'lucide-react';

const Football = () => {
  const groupStandings = [
    { position: 1, team: 'KenGen FC', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 2, goalDiff: 6, points: 9 },
    { position: 2, team: 'Safaricom United', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDiff: 2, points: 6 },
    { position: 3, team: 'EABL Brewers', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 6, goalDiff: -2, points: 3 },
    { position: 4, team: 'BAT Rangers', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDiff: -6, points: 0 },
  ];

  const matchResults = [
    {
      id: 1,
      homeTeam: 'KenGen FC',
      awayTeam: 'Safaricom United',
      homeScore: 2,
      awayScore: 1,
      status: 'completed',
      scorers: ['John Doe (KenGen) 23\'', 'Mike Smith (KenGen) 67\'', 'Peter Jones (Safaricom) 45\''],
      mvp: { name: 'John Doe', company: 'KenGen' }
    },
    {
      id: 2,
      homeTeam: 'EABL Brewers',
      awayTeam: 'BAT Rangers',
      homeScore: 3,
      awayScore: 1,
      status: 'completed',
      scorers: ['Alex Wilson (EABL) 12\'', 'David Brown (EABL) 34\'', 'Chris Green (EABL) 78\'', 'Tom White (BAT) 56\''],
      mvp: { name: 'Alex Wilson', company: 'EABL' }
    },
    {
      id: 3,
      homeTeam: 'KenGen FC',
      awayTeam: 'EABL Brewers',
      homeScore: 4,
      awayScore: 0,
      status: 'completed',
      scorers: ['John Doe (KenGen) 15\'', 'Mike Smith (KenGen) 23\'', 'James Clark (KenGen) 56\'', 'John Doe (KenGen) 89\''],
      mvp: { name: 'John Doe', company: 'KenGen' }
    }
  ];

  const knockoutBracket = {
    quarterFinals: [
      { team1: 'KenGen FC', team2: 'Coca Cola FC', score1: 2, score2: 0, status: 'completed' },
      { team1: 'Safaricom United', team2: 'Tusker FC', score1: 1, score2: 3, status: 'completed' },
      { team1: 'EABL Brewers', team2: 'KCB Lions', score1: 2, score2: 1, status: 'completed' },
      { team1: 'Bamburi Cement', team2: 'Nation FC', score1: 0, score2: 2, status: 'completed' }
    ],
    semiFinals: [
      { team1: 'KenGen FC', team2: 'Tusker FC', score1: null, score2: null, status: 'upcoming' },
      { team1: 'EABL Brewers', team2: 'Nation FC', score1: null, score2: null, status: 'upcoming' }
    ],
    final: {
      team1: 'TBD', team2: 'TBD', score1: null, score2: null, status: 'upcoming'
    }
  };

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
            <span className="text-foreground">Football </span>
            <span className="text-primary">Tournament</span>
          </h1>
          <p className="text-muted-foreground">Complete tournament results and standings</p>
        </div>

        <Tabs defaultValue="group-stage" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="group-stage">Group Stage</TabsTrigger>
            <TabsTrigger value="match-results">Match Results</TabsTrigger>
            <TabsTrigger value="knockouts">Knockouts</TabsTrigger>
          </TabsList>

          <TabsContent value="group-stage" className="space-y-6">
            <div className="bg-card rounded-lg shadow-card-custom p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Group A Standings
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pos</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-center">P</TableHead>
                    <TableHead className="text-center">W</TableHead>
                    <TableHead className="text-center">D</TableHead>
                    <TableHead className="text-center">L</TableHead>
                    <TableHead className="text-center">GF</TableHead>
                    <TableHead className="text-center">GA</TableHead>
                    <TableHead className="text-center">GD</TableHead>
                    <TableHead className="text-center">Pts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {groupStandings.map((team) => (
                    <TableRow key={team.position} className={team.position <= 2 ? "bg-green-50 dark:bg-green-950" : ""}>
                      <TableCell className="font-medium">{team.position}</TableCell>
                      <TableCell className="font-semibold">{team.team}</TableCell>
                      <TableCell className="text-center">{team.played}</TableCell>
                      <TableCell className="text-center">{team.won}</TableCell>
                      <TableCell className="text-center">{team.drawn}</TableCell>
                      <TableCell className="text-center">{team.lost}</TableCell>
                      <TableCell className="text-center">{team.goalsFor}</TableCell>
                      <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                      <TableCell className="text-center">{team.goalDiff > 0 ? '+' : ''}{team.goalDiff}</TableCell>
                      <TableCell className="text-center font-bold">{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                <span className="inline-block w-4 h-4 bg-green-100 dark:bg-green-950 rounded mr-2"></span>
                Top 2 teams qualify for knockouts
              </p>
            </div>
          </TabsContent>

          <TabsContent value="match-results" className="space-y-6">
            <div className="bg-card rounded-lg shadow-card-custom p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Match Results
              </h2>
              <div className="space-y-6">
                {matchResults.map((match) => (
                  <div key={match.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="font-semibold">{match.homeTeam}</div>
                          <div className="text-2xl font-bold text-primary">{match.homeScore}</div>
                        </div>
                        <div className="text-muted-foreground">vs</div>
                        <div className="text-center">
                          <div className="font-semibold">{match.awayTeam}</div>
                          <div className="text-2xl font-bold text-primary">{match.awayScore}</div>
                        </div>
                      </div>
                      {getStatusBadge(match.status)}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Goal Scorers:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {match.scorers.map((scorer, idx) => (
                            <li key={idx}>⚽ {scorer}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Man of the Match:</h4>
                        <p className="text-muted-foreground">
                          🏆 {match.mvp.name} ({match.mvp.company})
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="knockouts" className="space-y-6">
            <div className="bg-card rounded-lg shadow-card-custom p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 justify-center">
                <Trophy className="h-6 w-6 text-primary" />
                THE PLAYOFFS
              </h2>
              
              {/* Tournament Bracket */}
              <div className="relative overflow-x-auto">
                <div className="min-w-[800px] mx-auto">
                  {/* Bracket Container */}
                  <div className="relative h-[600px] flex items-center justify-center">
                    
                    {/* Quarter Finals - Left Side */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-around py-8">
                      {knockoutBracket.quarterFinals.slice(0, 2).map((match, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.status === 'completed' && match.score1 > match.score2 
                              ? 'bg-primary text-white' 
                              : 'bg-accent text-accent-foreground'
                          }`}>
                            <div>{match.team1}</div>
                            {match.status === 'completed' && <div className="text-lg font-bold">{match.score1}</div>}
                          </div>
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.status === 'completed' && match.score2 > match.score1 
                              ? 'bg-primary text-white' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <div>{match.team2}</div>
                            {match.status === 'completed' && <div className="text-lg font-bold">{match.score2}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quarter Finals - Right Side */}
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-around py-8">
                      {knockoutBracket.quarterFinals.slice(2, 4).map((match, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.status === 'completed' && match.score1 > match.score2 
                              ? 'bg-primary text-white' 
                              : 'bg-accent text-accent-foreground'
                          }`}>
                            <div>{match.team1}</div>
                            {match.status === 'completed' && <div className="text-lg font-bold">{match.score1}</div>}
                          </div>
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.status === 'completed' && match.score2 > match.score1 
                              ? 'bg-primary text-white' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <div>{match.team2}</div>
                            {match.status === 'completed' && <div className="text-lg font-bold">{match.score2}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Semi Finals - Left */}
                    <div className="absolute left-[180px] top-0 h-full flex flex-col justify-center gap-32">
                      {knockoutBracket.semiFinals.slice(0, 1).map((match, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.score1 !== null && match.score1 > (match.score2 || 0)
                              ? 'bg-primary text-white' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <div>{match.team1}</div>
                            {match.score1 !== null && <div className="text-lg font-bold">{match.score1}</div>}
                          </div>
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.score2 !== null && match.score2 > (match.score1 || 0)
                              ? 'bg-primary text-white' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <div>{match.team2}</div>
                            {match.score2 !== null && <div className="text-lg font-bold">{match.score2}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Semi Finals - Right */}
                    <div className="absolute right-[180px] top-0 h-full flex flex-col justify-center gap-32">
                      {knockoutBracket.semiFinals.slice(1, 2).map((match, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.score1 !== null && match.score1 > (match.score2 || 0)
                              ? 'bg-primary text-white' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <div>{match.team1}</div>
                            {match.score1 !== null && <div className="text-lg font-bold">{match.score1}</div>}
                          </div>
                          <div className={`px-4 py-3 rounded-lg text-center min-w-[140px] text-sm font-semibold ${
                            match.score2 !== null && match.score2 > (match.score1 || 0)
                              ? 'bg-primary text-white' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <div>{match.team2}</div>
                            {match.score2 !== null && <div className="text-lg font-bold">{match.score2}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Final */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center mb-4">
                        <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-full font-bold text-lg">
                          <Trophy className="inline h-5 w-5 mr-2" />
                          FINAL
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className={`px-6 py-4 rounded-lg text-center min-w-[160px] font-semibold ${
                          knockoutBracket.final.score1 !== null && knockoutBracket.final.score1 > (knockoutBracket.final.score2 || 0)
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                            : 'bg-card border-2 border-primary text-foreground'
                        }`}>
                          <div>{knockoutBracket.final.team1}</div>
                          {knockoutBracket.final.score1 !== null && (
                            <div className="text-xl font-bold">{knockoutBracket.final.score1}</div>
                          )}
                        </div>
                        <div className={`px-6 py-4 rounded-lg text-center min-w-[160px] font-semibold ${
                          knockoutBracket.final.score2 !== null && knockoutBracket.final.score2 > (knockoutBracket.final.score1 || 0)
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                            : 'bg-card border-2 border-primary text-foreground'
                        }`}>
                          <div>{knockoutBracket.final.team2}</div>
                          {knockoutBracket.final.score2 !== null && (
                            <div className="text-xl font-bold">{knockoutBracket.final.score2}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        {getStatusBadge(knockoutBracket.final.status)}
                      </div>
                    </div>

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                      {/* Quarter to Semi Lines - Left Side */}
                      <line x1="140" y1="150" x2="180" y2="150" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="140" y1="200" x2="180" y2="200" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="180" y1="150" x2="180" y2="200" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="180" y1="175" x2="220" y2="175" stroke="hsl(var(--border))" strokeWidth="2"/>
                      
                      <line x1="140" y1="400" x2="180" y2="400" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="140" y1="450" x2="180" y2="450" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="180" y1="400" x2="180" y2="450" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="180" y1="425" x2="220" y2="425" stroke="hsl(var(--border))" strokeWidth="2"/>
                      
                      {/* Quarter to Semi Lines - Right Side */}
                      <line x1="660" y1="150" x2="620" y2="150" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="660" y1="200" x2="620" y2="200" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="620" y1="150" x2="620" y2="200" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="620" y1="175" x2="580" y2="175" stroke="hsl(var(--border))" strokeWidth="2"/>
                      
                      <line x1="660" y1="400" x2="620" y2="400" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="660" y1="450" x2="620" y2="450" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="620" y1="400" x2="620" y2="450" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="620" y1="425" x2="580" y2="425" stroke="hsl(var(--border))" strokeWidth="2"/>
                      
                      {/* Semi to Final Lines */}
                      <line x1="360" y1="300" x2="380" y2="300" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="440" y1="300" x2="420" y2="300" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="380" y1="280" x2="380" y2="320" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="420" y1="280" x2="420" y2="320" stroke="hsl(var(--border))" strokeWidth="2"/>
                      <line x1="380" y1="300" x2="420" y2="300" stroke="hsl(var(--border))" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Football;