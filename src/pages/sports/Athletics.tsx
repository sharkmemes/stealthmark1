import { Header } from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Medal } from 'lucide-react';

const Athletics = () => {
  const menResults = {
    '100m': [
      { position: 1, name: 'James Kiprotich', company: 'Safaricom', time: '10.23s' },
      { position: 2, name: 'Peter Wanjiku', company: 'KenGen', time: '10.45s' },
      { position: 3, name: 'David Mutua', company: 'EABL', time: '10.67s' }
    ],
    '200m': [
      { position: 1, name: 'Michael Otieno', company: 'Coca Cola', time: '21.12s' },
      { position: 2, name: 'James Kiprotich', company: 'Safaricom', time: '21.34s' },
      { position: 3, name: 'John Mbugua', company: 'BAT', time: '21.78s' }
    ],
    '400m': [
      { position: 1, name: 'Samuel Kemboi', company: 'KenGen', time: '47.89s' },
      { position: 2, name: 'Michael Otieno', company: 'Coca Cola', time: '48.23s' },
      { position: 3, name: 'Francis Mwangi', company: 'Tusker', time: '48.67s' }
    ],
    '800m': [
      { position: 1, name: 'Daniel Komen', company: 'Safaricom', time: '1:52.34' },
      { position: 2, name: 'Samuel Kemboi', company: 'KenGen', time: '1:53.12' },
      { position: 3, name: 'Paul Kiplagat', company: 'EABL', time: '1:54.67' }
    ],
    '1500m': [
      { position: 1, name: 'Daniel Komen', company: 'Safaricom', time: '3:45.23' },
      { position: 2, name: 'Robert Chepkwony', company: 'KCB', time: '3:46.78' },
      { position: 3, name: 'Moses Tanui', company: 'Equity', time: '3:48.12' }
    ]
  };

  const womenResults = {
    '100m': [
      { position: 1, name: 'Grace Wanjiku', company: 'Safaricom', time: '11.87s' },
      { position: 2, name: 'Mary Njeri', company: 'KenGen', time: '12.12s' },
      { position: 3, name: 'Susan Muthoni', company: 'EABL', time: '12.34s' }
    ],
    '200m': [
      { position: 1, name: 'Grace Wanjiku', company: 'Safaricom', time: '24.23s' },
      { position: 2, name: 'Patricia Wairimu', company: 'Coca Cola', time: '24.67s' },
      { position: 3, name: 'Mary Njeri', company: 'KenGen', time: '24.89s' }
    ],
    '400m': [
      { position: 1, name: 'Faith Chepkemoi', company: 'KCB', time: '55.23s' },
      { position: 2, name: 'Patricia Wairimu', company: 'Coca Cola', time: '55.78s' },
      { position: 3, name: 'Jane Wambui', company: 'Equity', time: '56.12s' }
    ],
    '800m': [
      { position: 1, name: 'Faith Chepkemoi', company: 'KCB', time: '2:08.34' },
      { position: 2, name: 'Nancy Jelagat', company: 'Safaricom', time: '2:09.67' },
      { position: 3, name: 'Rose Chelimo', company: 'KenGen', time: '2:10.89' }
    ],
    '1500m': [
      { position: 1, name: 'Nancy Jelagat', company: 'Safaricom', time: '4:23.45' },
      { position: 2, name: 'Rose Chelimo', company: 'KenGen', time: '4:25.12' },
      { position: 3, name: 'Agnes Tirop', company: 'EABL', time: '4:27.67' }
    ]
  };

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '';
    }
  };

  const getMedalColor = (position: number) => {
    switch (position) {
      case 1: return 'text-yellow-600';
      case 2: return 'text-gray-500';
      case 3: return 'text-amber-600';
      default: return '';
    }
  };

  const renderPodium = (results: any[], title: string) => (
    <div className="bg-card rounded-lg shadow-card-custom p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-primary" />
        {title}
      </h3>
      <div className="flex justify-center items-end gap-4 mb-4">
        {/* 2nd Place */}
        <div className="text-center bg-gradient-card p-4 rounded-lg">
          <div className="text-3xl mb-2">🥈</div>
          <div className="font-semibold">{results[1]?.name}</div>
          <div className="text-sm text-muted-foreground">{results[1]?.company}</div>
          <div className="text-lg font-bold text-primary mt-2">{results[1]?.time}</div>
        </div>
        
        {/* 1st Place */}
        <div className="text-center bg-gradient-card p-6 rounded-lg transform scale-110">
          <div className="text-4xl mb-2">🥇</div>
          <div className="font-bold text-lg">{results[0]?.name}</div>
          <div className="text-sm text-muted-foreground">{results[0]?.company}</div>
          <div className="text-xl font-bold text-primary mt-2">{results[0]?.time}</div>
        </div>
        
        {/* 3rd Place */}
        <div className="text-center bg-gradient-card p-4 rounded-lg">
          <div className="text-3xl mb-2">🥉</div>
          <div className="font-semibold">{results[2]?.name}</div>
          <div className="text-sm text-muted-foreground">{results[2]?.company}</div>
          <div className="text-lg font-bold text-primary mt-2">{results[2]?.time}</div>
        </div>
      </div>
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
            <span className="text-foreground">Athletics </span>
            <span className="text-primary">Tournament</span>
          </h1>
          <p className="text-muted-foreground">Track events results and podium finishers</p>
        </div>

        <Tabs defaultValue="men" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="men">Men's Events</TabsTrigger>
            <TabsTrigger value="women">Women's Events</TabsTrigger>
          </TabsList>

          <TabsContent value="men" className="space-y-6">
            <div className="grid gap-6">
              {Object.entries(menResults).map(([event, results]) => 
                renderPodium(results, `Men's ${event}`)
              )}
            </div>
          </TabsContent>

          <TabsContent value="women" className="space-y-6">
            <div className="grid gap-6">
              {Object.entries(womenResults).map(([event, results]) => 
                renderPodium(results, `Women's ${event}`)
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Summary Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="text-foreground">Overall </span>
            <span className="text-primary">Athletics Results</span>
          </h2>
          
          <Tabs defaultValue="men-table" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="men-table">Men's Results</TabsTrigger>
              <TabsTrigger value="women-table">Women's Results</TabsTrigger>
            </TabsList>

            <TabsContent value="men-table">
              <div className="bg-card rounded-lg shadow-card-custom p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Gold 🥇</TableHead>
                      <TableHead>Silver 🥈</TableHead>
                      <TableHead>Bronze 🥉</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(menResults).map(([event, results]) => (
                      <TableRow key={event}>
                        <TableCell className="font-semibold">{event}</TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[0]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[0]?.company} - {results[0]?.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[1]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[1]?.company} - {results[1]?.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[2]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[2]?.company} - {results[2]?.time}</div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="women-table">
              <div className="bg-card rounded-lg shadow-card-custom p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Gold 🥇</TableHead>
                      <TableHead>Silver 🥈</TableHead>
                      <TableHead>Bronze 🥉</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(womenResults).map(([event, results]) => (
                      <TableRow key={event}>
                        <TableCell className="font-semibold">{event}</TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[0]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[0]?.company} - {results[0]?.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[1]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[1]?.company} - {results[1]?.time}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold">{results[2]?.name}</div>
                          <div className="text-sm text-muted-foreground">{results[2]?.company} - {results[2]?.time}</div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Athletics;