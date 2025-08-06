import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ManufacturersSportsDay from "./pages/ManufacturersSportsDay";
import Football from "./pages/sports/Football";
import Volleyball from "./pages/sports/Volleyball";
import Athletics from "./pages/sports/Athletics";
import IndoorGames from "./pages/sports/IndoorGames";
import OverallPoints from "./pages/OverallPoints";
import ParticipationPoints from "./pages/ParticipationPoints";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<CreateEvent />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/events/1" element={<ManufacturersSportsDay />} />
            <Route path="/sports/football" element={<Football />} />
            <Route path="/sports/volleyball" element={<Volleyball />} />
            <Route path="/sports/athletics" element={<Athletics />} />
            <Route path="/sports/indoor-games" element={<IndoorGames />} />
            <Route path="/overall-points" element={<OverallPoints />} />
            <Route path="/participation-points" element={<ParticipationPoints />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
