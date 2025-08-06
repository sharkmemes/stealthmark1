import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OverallPoints = () => {
  const overallStandings = [
    { position: 1, company: "TechCorp Ltd", points: 145, football: 25, volleyball: 20, athletics: 30, indoor: 15, auxiliary: 25, participation: 30 },
    { position: 2, company: "InnovateCo", points: 132, football: 20, volleyball: 25, athletics: 25, indoor: 20, auxiliary: 20, participation: 22 },
    { position: 3, company: "BuildMax", points: 128, football: 22, volleyball: 18, athletics: 28, indoor: 18, auxiliary: 22, participation: 20 },
    { position: 4, company: "DigitalSoft", points: 115, football: 18, volleyball: 22, athletics: 20, indoor: 25, auxiliary: 15, participation: 15 },
    { position: 5, company: "MetalWorks", points: 108, football: 15, volleyball: 15, athletics: 22, indoor: 12, auxiliary: 24, participation: 20 },
    { position: 6, company: "AgriTech", points: 95, football: 12, volleyball: 20, athletics: 18, indoor: 20, auxiliary: 15, participation: 10 },
    { position: 7, company: "EnergyPlus", points: 88, football: 10, volleyball: 12, athletics: 15, indoor: 16, auxiliary: 20, participation: 15 },
    { position: 8, company: "AutoMotive", points: 82, football: 14, volleyball: 14, athletics: 12, indoor: 14, auxiliary: 18, participation: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/events/1">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Event
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Overall Points Tally
            </h1>
            <p className="text-muted-foreground mt-2">
              Complete standings across all sports and activities
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Final Standings - Manufacturers' Sports Day 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-center">Total Points</TableHead>
                    <TableHead className="text-center">Football</TableHead>
                    <TableHead className="text-center">Volleyball</TableHead>
                    <TableHead className="text-center">Athletics</TableHead>
                    <TableHead className="text-center">Indoor Games</TableHead>
                    <TableHead className="text-center">Auxiliary</TableHead>
                    <TableHead className="text-center">Participation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overallStandings.map((company) => (
                    <TableRow key={company.position} className={company.position <= 3 ? "bg-muted/50" : ""}>
                      <TableCell className="font-bold">
                        {company.position === 1 && "🥇"}
                        {company.position === 2 && "🥈"}
                        {company.position === 3 && "🥉"}
                        {company.position > 3 && company.position}
                      </TableCell>
                      <TableCell className="font-medium">{company.company}</TableCell>
                      <TableCell className="text-center font-bold text-primary">{company.points}</TableCell>
                      <TableCell className="text-center">{company.football}</TableCell>
                      <TableCell className="text-center">{company.volleyball}</TableCell>
                      <TableCell className="text-center">{company.athletics}</TableCell>
                      <TableCell className="text-center">{company.indoor}</TableCell>
                      <TableCell className="text-center">{company.auxiliary}</TableCell>
                      <TableCell className="text-center">{company.participation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">🥇 Champion</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-primary">TechCorp Ltd</h3>
              <p className="text-3xl font-bold text-yellow-600">145 Points</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center">🥈 Runner-up</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-primary">InnovateCo</h3>
              <p className="text-3xl font-bold text-gray-400">132 Points</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center">🥉 Third Place</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-primary">BuildMax</h3>
              <p className="text-3xl font-bold text-amber-600">128 Points</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverallPoints;