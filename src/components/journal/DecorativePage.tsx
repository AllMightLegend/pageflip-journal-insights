
import { Flower2, Sparkles, Palette, Heart } from "lucide-react";

interface DecorativePageProps {
  isEven: boolean;
}

const DecorativePage = ({ isEven }: DecorativePageProps) => {
  return (
    <div className={`diary-page h-[733px] w-[550px] transition-colors duration-300 ${
      isEven ? 'bg-gradient-to-br from-card to-muted/30' : 'bg-gradient-to-br from-muted/30 to-card'
    }`}>
      <div className="p-8 h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-4">
            <Flower2 className="w-20 h-20 text-primary/60 animate-pulse" strokeWidth={1} />
            <Sparkles className="w-16 h-16 text-accent/60 animate-bounce" strokeWidth={1} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Heart className="w-16 h-16 text-destructive/60 animate-pulse" strokeWidth={1} />
            <Palette className="w-20 h-20 text-secondary/60 animate-bounce" strokeWidth={1} />
          </div>
        </div>
        <p className="mt-8 text-2xl font-journal text-muted-foreground italic text-center">
          {isEven ? "Memories are made of little moments..." : "Every moment is a story waiting to be told..."}
        </p>
      </div>
    </div>
  );
};

export default DecorativePage;
