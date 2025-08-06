import { Header } from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Trophy, Gamepad2 } from 'lucide-react';

const IndoorGames = () => {
  const tableTennisResults = {
    men: [
      { position: 1, name: 'Kevin Ochieng', company: 'Safaricom', points: 95 },
      { position: 2, name: 'Paul Mutua', company: 'KenGen', points: 88 },
      { position: 3, name: 'John Kamau', company: 'EABL', points: 82 }
    ],
    women: [
      { position: 1, name: 'Susan Wanjiku', company: 'Coca Cola', points: 91 },
      { position: 2, name: 'Mary Muthoni', company: 'Safaricom', points: 87 },
      { position: 3, name: 'Grace Njeri', company: 'KCB', points: 84 }
    ]
  };

  const chessResults = {
    men: [
      { position: 1, name: 'Daniel Kiplagat', company: 'KCB', points: 98 },
      { position: 2, name: 'Michael Wafula', company: 'Equity', points: 94 },
      { position: 3, name: 'James Mwangi', company: 'Safaricom', points: 89 }
    ],
    women: [
      { position: 1, name: 'Catherine Wanjala', company: 'EABL', points: 96 },
      { position: 2, name: 'Ruth Cherop', company: 'KenGen', points: 91 },
      { position: 3, name: 'Jane Akinyi', company: 'Tusker', points: 88 }
    ]
  };

  const dartsResults = {
    men: [
      { position: 1, name: 'Peter Otieno', company: 'BAT', points: 180 },
      { position: 2, name: 'David Kiprotich', company: 'Coca Cola', points: 175 },
      { position: 3, name: 'Simon Mbugua', company: 'Safaricom', points: 168 }
    ],
    women: [
      { position: 1, name: 'Alice Wambui', company: 'KenGen', points: 172 },
      { position: 2, name: 'Sarah Nyong\'o', company: 'Nation', points: 165 },
      { position: 3, name: 'Joyce Mutindi', company: 'EABL', points: 158 }
    ]
  };

  const badmintonResults = {
    men: [
      { position: 1, name: 'Robert Chepkemoi', company: 'Equity', points: 95 },
      { position: 2, name: 'Francis Korir', company: 'KCB', points: 89 },
      { position: 3, name: 'Mark Wekesa', company: 'Safaricom', points: 85 }
    ],
    women: [
      { position: 1, name: 'Linda Kemunto', company: 'Coca Cola', points: 93 },
      { position: 2, name: 'Nancy Jelimo', company: 'KenGen', points: 88 },
      { position: 3, name: 'Patricia Auma', company: 'Nation', points: 83 }
    ]
  };

  const getMedalEmoji = (position: number) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '';
    }
  };

  const renderResultsTable = (results: any, title: string, scoreLabel: string) => (
    <div className="bg-card rounded-lg shadow-card-custom p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Gamepad2 className="h-5 w-5 text-primary" />
        {title}
      </h3>
      
      <Tabs defaultValue="men" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="men">Men</TabsTrigger>
          <TabsTrigger value="women">Women</TabsTrigger>
        </TabsList>

        <TabsContent value="men">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-center">{scoreLabel}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.men.map((player: any) => (
                <TableRow key={player.position} className={player.position <= 3 ? "bg-yellow-50 dark:bg-yellow-950" : ""}>
                  <TableCell className="font-medium">
                    {getMedalEmoji(player.position)} {player.position}
                  </TableCell>
                  <TableCell className="font-semibold">{player.name}</TableCell>
                  <TableCell>{player.company}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{player.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="women">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-center">{scoreLabel}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.women.map((player: any) => (
                <TableRow key={player.position} className={player.position <= 3 ? "bg-yellow-50 dark:bg-yellow-950" : ""}>
                  <TableCell className="font-medium">
                    {getMedalEmoji(player.position)} {player.position}
                  </TableCell>
                  <TableCell className="font-semibold">{player.name}</TableCell>
                  <TableCell>{player.company}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{player.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );

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
            <span className="text-foreground">Indoor </span>
            <span className="text-primary">Games</span>
          </h1>
          <p className="text-muted-foreground">Individual competition results with Men and Women categories</p>
        </div>

        <Tabs defaultValue="table-tennis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="table-tennis">Table Tennis</TabsTrigger>
            <TabsTrigger value="chess">Chess</TabsTrigger>
            <TabsTrigger value="darts">Darts</TabsTrigger>
            <TabsTrigger value="badminton">Badminton</TabsTrigger>
          </TabsList>

          <TabsContent value="table-tennis">
            {renderResultsTable(tableTennisResults, 'Table Tennis Championship', 'Rating')}
          </TabsContent>

          <TabsContent value="chess">
            {renderResultsTable(chessResults, 'Chess Tournament', 'ELO Rating')}
          </TabsContent>

          <TabsContent value="darts">
            {renderResultsTable(dartsResults, 'Darts Competition', 'Best Score')}
          </TabsContent>

          <TabsContent value="badminton">
            {renderResultsTable(badmintonResults, 'Badminton Singles', 'Points')}
          </TabsContent>
        </Tabs>

        {/* Overall Indoor Games Champions */}
        <div className="mt-12">
          <div className="bg-card rounded-lg shadow-card-custom p-6">
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Overall Indoor Games Champions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Men's Champions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🏓 Table Tennis</span>
                    <div className="text-right">
                      <div className="font-bold">Kevin Ochieng</div>
                      <div className="text-sm text-muted-foreground">Safaricom</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">♟️ Chess</span>
                    <div className="text-right">
                      <div className="font-bold">Daniel Kiplagat</div>
                      <div className="text-sm text-muted-foreground">KCB</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🎯 Darts</span>
                    <div className="text-right">
                      <div className="font-bold">Peter Otieno</div>
                      <div className="text-sm text-muted-foreground">BAT</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🏸 Badminton</span>
                    <div className="text-right">
                      <div className="font-bold">Robert Chepkemoi</div>
                      <div className="text-sm text-muted-foreground">Equity</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Women's Champions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🏓 Table Tennis</span>
                    <div className="text-right">
                      <div className="font-bold">Susan Wanjiku</div>
                      <div className="text-sm text-muted-foreground">Coca Cola</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">♟️ Chess</span>
                    <div className="text-right">
                      <div className="font-bold">Catherine Wanjala</div>
                      <div className="text-sm text-muted-foreground">EABL</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🎯 Darts</span>
                    <div className="text-right">
                      <div className="font-bold">Alice Wambui</div>
                      <div className="text-sm text-muted-foreground">KenGen</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="font-semibold">🏸 Badminton</span>
                    <div className="text-right">
                      <div className="font-bold">Linda Kemunto</div>
                      <div className="text-sm text-muted-foreground">Coca Cola</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorGames;