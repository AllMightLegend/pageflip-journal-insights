
import { useState } from "react";
import { JournalEntry } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface GalleryGridProps {
  entries: JournalEntry[];
}

const GalleryGrid = ({ entries }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Collect all images from all entries
  const allImages = entries.reduce<string[]>((acc, entry) => {
    if (entry.images && entry.images.length > 0) {
      return [...acc, ...entry.images];
    }
    return acc;
  }, []);
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(allImages.indexOf(image));
  };
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };
  
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };
  
  return (
    <div>
      <div className="photo-gallery animate-fade-in">
        {allImages.map((image, index) => (
          <div 
            key={index} 
            className="photo-item animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur">
          <div className="relative">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-h-[80vh] w-auto mx-auto"
              />
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
              onClick={handleNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryGrid;
