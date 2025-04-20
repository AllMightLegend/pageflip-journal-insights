
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChartBar, GalleryHorizontal, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-journal font-bold text-primary">
          PageFlip Journal
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className="nav-item flex items-center"
          >
            <FileText className="mr-1 h-4 w-4" />
            Journal
          </Link>
          <Link 
            to="/analytics" 
            className="nav-item flex items-center"
          >
            <ChartBar className="mr-1 h-4 w-4" />
            Analytics
          </Link>
          <Link 
            to="/gallery" 
            className="nav-item flex items-center"
          >
            <GalleryHorizontal className="mr-1 h-4 w-4" />
            Gallery
          </Link>
          <Link 
            to="/calendar" 
            className="nav-item flex items-center"
          >
            <Calendar className="mr-1 h-4 w-4" />
            Calendar
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="font-journal">
            New Entry
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
