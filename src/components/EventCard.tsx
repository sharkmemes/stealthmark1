import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  status: 'upcoming' | 'ongoing' | 'ended';
  image: string;
  sport: string;
  id?: number;
  className?: string;
}

export const EventCard = ({ 
  title, 
  description, 
  date, 
  location, 
  participants, 
  status, 
  image,
  sport,
  id = 1,
  className = "" 
}: EventCardProps) => {
  const statusColors = {
    upcoming: 'bg-blue-500 text-white',
    ongoing: 'bg-green-500 text-white',
    ended: 'bg-gray-500 text-white'
  };

  return (
    <Link to={`/events/${id}`}>
      <Card className={`group cursor-pointer hover:shadow-brand transition-all duration-300 hover:scale-105 ${className}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{participants} participants</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};