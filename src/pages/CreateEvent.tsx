import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stepper } from '@/components/ui/stepper';
import { ArrowLeft, ArrowRight, Upload, Calendar, MapPin, Users, Trophy, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    title: '',
    description: '',
    sports: [] as string[], // Changed to array for multiple sports
    eventType: '',
    
    // Step 2: Date & Location
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    venue: '',
    
    // Step 3: Teams & Participants
    teams: [] as Array<{id: string, name: string, company: string, sport: string, contactPerson: string, contactEmail: string}>,
    maxParticipants: '',
    registrationDeadline: '',
    contactEmail: '',
    contactPhone: '',
    
    // Step 4: Optional Details
    poster: null as File | null,
    requirements: '',
    prizes: '',
    rules: ''
  });

  const steps = [
    { id: 'basic', title: 'Basic Info', description: 'Event details' },
    { id: 'schedule', title: 'Schedule', description: 'Date & location' },
    { id: 'teams', title: 'Teams', description: 'Team registration' },
    { id: 'details', title: 'Details', description: 'Additional info' },
    { id: 'review', title: 'Review', description: 'Confirm & submit' }
  ];

  const [newTeam, setNewTeam] = useState({
    name: '',
    company: '',
    sport: '',
    contactPerson: '',
    contactEmail: ''
  });

  const sports = [
    'Football', 'Basketball', 'Volleyball', 'Tennis', 'Cricket', 
    'Rugby', 'Badminton', 'Table Tennis', 'Golf', 'Swimming'
  ];

  const eventTypes = [
    'Tournament', 'League', 'Championship', 'Friendly Match', 
    'Training Session', 'Workshop', 'Team Building'
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSport = (sport: string) => {
    if (sport && !formData.sports.includes(sport)) {
      updateFormData('sports', [...formData.sports, sport]);
    }
  };

  const removeSport = (sportToRemove: string) => {
    updateFormData('sports', formData.sports.filter(sport => sport !== sportToRemove));
  };

  const addTeam = () => {
    if (newTeam.name && newTeam.company && newTeam.sport && newTeam.contactPerson && newTeam.contactEmail) {
      const team = {
        id: Date.now().toString(),
        ...newTeam
      };
      updateFormData('teams', [...formData.teams, team]);
      setNewTeam({
        name: '',
        company: '',
        sport: '',
        contactPerson: '',
        contactEmail: ''
      });
    }
  };

  const removeTeam = (teamId: string) => {
    updateFormData('teams', formData.teams.filter(team => team.id !== teamId));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    toast({
      title: "Event Created Successfully!",
      description: "Your event has been submitted and is pending approval.",
    });
    navigate('/events');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.description && formData.sports.length > 0 && formData.eventType;
      case 2:
        return formData.date && formData.startTime && formData.location && formData.venue;
      case 3:
        return formData.maxParticipants && formData.registrationDeadline && formData.contactEmail;
      case 4:
        return true; // Optional step
      case 5:
        return true; // Review step
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Basic Event Information</h2>
              <p className="text-muted-foreground">Let's start with the essential details</p>
            </div>
            
            <div className="grid gap-6">
              <div>
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Corporate Football Championship 2024"
                  value={formData.title}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Event Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your event, its purpose, and what participants can expect..."
                  value={formData.description}
                  onChange={(e) => updateFormData('description', e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="sports">Sports *</Label>
                <div className="mt-2 space-y-2">
                  <Select onValueChange={addSport}>
                    <SelectTrigger>
                      <SelectValue placeholder="Add sports to your event" />
                    </SelectTrigger>
                    <SelectContent>
                      {sports
                        .filter(sport => !formData.sports.includes(sport.toLowerCase()))
                        .map((sport) => (
                          <SelectItem key={sport} value={sport.toLowerCase()}>
                            {sport}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  
                  {formData.sports.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.sports.map((sport) => (
                        <div key={sport} className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {sport.charAt(0).toUpperCase() + sport.slice(1)}
                          <button
                            type="button"
                            onClick={() => removeSport(sport)}
                            className="ml-2 hover:text-primary/70"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
                
              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={(value) => updateFormData('eventType', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Schedule & Location</h2>
              <p className="text-muted-foreground">When and where will your event take place?</p>
            </div>
            
            <div className="grid gap-6">
              <div>
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData('date', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startTime">Start Time *</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => updateFormData('startTime', e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => updateFormData('endTime', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">City/Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Nairobi, Lagos, Cape Town"
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="venue">Venue Name *</Label>
                <Input
                  id="venue"
                  placeholder="e.g., Sports Complex, Arena, Stadium"
                  value={formData.venue}
                  onChange={(e) => updateFormData('venue', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Teams & Registration</h2>
              <p className="text-muted-foreground">Add participating teams and configure settings</p>
            </div>
            
            <div className="grid gap-6">
              {/* Registration Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Registration Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maxParticipants">Maximum Participants *</Label>
                      <Input
                        id="maxParticipants"
                        type="number"
                        placeholder="e.g., 120"
                        value={formData.maxParticipants}
                        onChange={(e) => updateFormData('maxParticipants', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="registrationDeadline">Registration Deadline *</Label>
                      <Input
                        id="registrationDeadline"
                        type="date"
                        value={formData.registrationDeadline}
                        onChange={(e) => updateFormData('registrationDeadline', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactEmail">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="event@company.com"
                        value={formData.contactEmail}
                        onChange={(e) => updateFormData('contactEmail', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={formData.contactPhone}
                        onChange={(e) => updateFormData('contactPhone', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Registration */}
              <Card>
                <CardHeader>
                  <CardTitle>Team Registration</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Add teams that will participate in your event
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="teamName">Team Name</Label>
                      <Input
                        id="teamName"
                        placeholder="e.g., Tech Warriors"
                        value={newTeam.name}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="e.g., TechCorp Ltd"
                        value={newTeam.company}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, company: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="teamSport">Sport</Label>
                      <Select value={newTeam.sport} onValueChange={(value) => setNewTeam(prev => ({ ...prev, sport: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select sport" />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.sports.map((sport) => (
                            <SelectItem key={sport} value={sport}>
                              {sport.charAt(0).toUpperCase() + sport.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input
                        id="contactPerson"
                        placeholder="Team captain name"
                        value={newTeam.contactPerson}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, contactPerson: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="teamEmail">Contact Email</Label>
                      <Input
                        id="teamEmail"
                        type="email"
                        placeholder="captain@company.com"
                        value={newTeam.contactEmail}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, contactEmail: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex items-end">
                      <Button 
                        type="button" 
                        onClick={addTeam}
                        className="w-full"
                        disabled={!newTeam.name || !newTeam.company || !newTeam.sport || !newTeam.contactPerson || !newTeam.contactEmail}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Team
                      </Button>
                    </div>
                  </div>
                  
                  {formData.teams.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Registered Teams ({formData.teams.length})</h4>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {formData.teams.map((team) => (
                          <div key={team.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium">{team.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {team.company} • {team.sport.charAt(0).toUpperCase() + team.sport.slice(1)} • {team.contactPerson}
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTeam(team.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Additional Details</h2>
              <p className="text-muted-foreground">Optional information to enhance your event</p>
            </div>
            
            <div className="grid gap-6">
              <div>
                <Label htmlFor="poster">Event Poster</Label>
                <div className="mt-2 border-2 border-dashed border-muted rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload an event poster (optional)
                  </p>
                  <Input
                    id="poster"
                    type="file"
                    accept="image/*"
                    onChange={(e) => updateFormData('poster', e.target.files?.[0] || null)}
                    className="max-w-xs mx-auto"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="requirements">Participation Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="e.g., Corporate ID required, team registration, equipment needed..."
                  value={formData.requirements}
                  onChange={(e) => updateFormData('requirements', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="prizes">Prizes & Awards</Label>
                <Textarea
                  id="prizes"
                  placeholder="e.g., Trophies for top 3 teams, certificates for all participants..."
                  value={formData.prizes}
                  onChange={(e) => updateFormData('prizes', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="rules">Event Rules</Label>
                <Textarea
                  id="rules"
                  placeholder="Specific rules and regulations for this event..."
                  value={formData.rules}
                  onChange={(e) => updateFormData('rules', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Review Your Event</h2>
              <p className="text-muted-foreground">Please review all details before submitting</p>
            </div>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Title:</strong> {formData.title}</p>
                  <p><strong>Description:</strong> {formData.description}</p>
                  <p><strong>Sports:</strong> {formData.sports.map(sport => sport.charAt(0).toUpperCase() + sport.slice(1)).join(', ')}</p>
                  <p><strong>Type:</strong> {formData.eventType}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Schedule & Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.startTime} {formData.endTime && `- ${formData.endTime}`}</p>
                  <p><strong>Location:</strong> {formData.location}</p>
                  <p><strong>Venue:</strong> {formData.venue}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Teams & Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Max Participants:</strong> {formData.maxParticipants}</p>
                  <p><strong>Registration Deadline:</strong> {formData.registrationDeadline}</p>
                  <p><strong>Contact Email:</strong> {formData.contactEmail}</p>
                  {formData.contactPhone && <p><strong>Contact Phone:</strong> {formData.contactPhone}</p>}
                  <p><strong>Registered Teams:</strong> {formData.teams.length}</p>
                  {formData.teams.length > 0 && (
                    <div className="mt-3">
                      <div className="text-sm space-y-1">
                        {formData.teams.map((team, index) => (
                          <div key={team.id} className="text-muted-foreground">
                            {index + 1}. {team.name} ({team.company}) - {team.sport.charAt(0).toUpperCase() + team.sport.slice(1)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
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

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          <Card className="p-6">
            {renderStepContent()}
            
            <div className="flex justify-between pt-8 border-t mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Submit Event
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;