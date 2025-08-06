import { Header } from '@/components/Header';
import { Trophy, Users, Target, Award, Calendar, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="text-primary">Stealth Mark Africa</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the future of corporate sports management across Kenya and East Africa with innovative technology and professional excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded with a vision to revolutionize corporate sports management, Stealth Mark Africa has become the trusted partner for organizations seeking professional tournament management and real-time sports technology solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that sports bring people together, foster teamwork, and create lasting memories. Our platform ensures that every moment is captured, every score is recorded, and every participant is celebrated.
                </p>
              </div>
              <div className="bg-gradient-card p-8 rounded-lg shadow-card-custom">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Events Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Companies Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Participants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for perfection in every aspect of our service delivery, ensuring the highest quality experiences.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Sports bring people together, and we facilitate meaningful connections through well-organized events.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge technology to provide real-time solutions and enhance the sports experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sports management solutions tailored for corporate environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Event Planning</h3>
              <p className="text-muted-foreground">
                Complete event conceptualization, planning, and execution with attention to every detail.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Real-Time Scoring</h3>
              <p className="text-muted-foreground">
                Live scoring systems that keep participants and spectators engaged throughout events.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-card shadow-card-custom">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Awards & Recognition</h3>
              <p className="text-muted-foreground">
                Professional ceremonies and recognition programs to celebrate achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;