import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ParticipationPoints = () => {
  const participationData = [
    { company: "TechCorp Ltd", employees: 45, participants: 42, percentage: 93.3, points: 30 },
    { company: "InnovateCo", employees: 38, participants: 34, percentage: 89.5, points: 22 },
    { company: "BuildMax", employees: 52, participants: 45, percentage: 86.5, points: 20 },
    { company: "DigitalSoft", employees: 30, participants: 25, percentage: 83.3, points: 15 },
    { company: "MetalWorks", employees: 41, participants: 33, percentage: 80.5, points: 20 },
    { company: "AgriTech", employees: 25, participants: 18, percentage: 72.0, points: 10 },
    { company: "EnergyPlus", employees: 35, participants: 24, percentage: 68.6, points: 15 },
    { company: "AutoMotive", employees: 28, participants: 18, percentage: 64.3, points: 10 },
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
              Participation Points
            </h1>
            <p className="text-muted-foreground mt-2">
              Points awarded based on employee participation rates
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Participation Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>90%+ participation:</span>
                  <span className="font-bold text-green-600">30 points</span>
                </div>
                <div className="flex justify-between">
                  <span>80-89% participation:</span>
                  <span className="font-bold text-blue-600">20 points</span>
                </div>
                <div className="flex justify-between">
                  <span>70-79% participation:</span>
                  <span className="font-bold text-orange-600">15 points</span>
                </div>
                <div className="flex justify-between">
                  <span>60-69% participation:</span>
                  <span className="font-bold text-red-600">10 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Below 60%:</span>
                  <span className="font-bold text-gray-600">5 points</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Participation Award</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-primary">TechCorp Ltd</h3>
              <p className="text-xl text-muted-foreground">93.3% Participation</p>
              <p className="text-lg font-bold text-green-600">42 out of 45 employees</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Participation Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-center">Total Employees</TableHead>
                    <TableHead className="text-center">Participants</TableHead>
                    <TableHead className="text-center">Participation %</TableHead>
                    <TableHead className="text-center">Points Awarded</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {participationData.map((company, index) => (
                    <TableRow key={company.company} className={index === 0 ? "bg-green-50 dark:bg-green-900/20" : ""}>
                      <TableCell className="font-medium">
                        {index === 0 && "🏆 "}{company.company}
                      </TableCell>
                      <TableCell className="text-center">{company.employees}</TableCell>
                      <TableCell className="text-center font-medium">{company.participants}</TableCell>
                      <TableCell className="text-center">
                        <span className={`font-bold ${
                          company.percentage >= 90 ? "text-green-600" :
                          company.percentage >= 80 ? "text-blue-600" :
                          company.percentage >= 70 ? "text-orange-600" :
                          company.percentage >= 60 ? "text-red-600" : "text-gray-600"
                        }`}>
                          {company.percentage}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-bold text-primary">{company.points}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Participation Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">294</div>
                <div className="text-sm text-muted-foreground">Total Employees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">239</div>
                <div className="text-sm text-muted-foreground">Total Participants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">81.3%</div>
                <div className="text-sm text-muted-foreground">Overall Participation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-sm text-muted-foreground">Participating Companies</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParticipationPoints;