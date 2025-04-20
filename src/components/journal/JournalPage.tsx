
import { format } from "date-fns";
import { JournalEntry } from "@/types";

interface JournalPageProps {
  entry: JournalEntry;
  isEven: boolean;
}

const JournalPage = ({ entry, isEven }: JournalPageProps) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, "MMMM d, yyyy");
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className={`diary-page h-[733px] w-[550px] transition-colors duration-300 ${
      isEven ? 'bg-gradient-to-br from-card to-muted/30' : 'bg-gradient-to-br from-muted/30 to-card'
    }`}>
      <div className="p-8 overflow-y-auto h-full">
        <div className="mb-6 border-b pb-3">
          <h2 className="text-3xl font-bold font-journal text-primary mb-2 tracking-wide">
            {entry.title}
          </h2>
          <p className="text-sm text-muted-foreground font-journal flex items-center gap-2">
            {formatDate(entry.date)}
            {entry.location && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block" />
                {entry.location}
              </>
            )}
            {entry.mood && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block" />
                Mood: {entry.mood}
              </>
            )}
          </p>
        </div>
        
        <div className="journal-content whitespace-pre-line mb-6 font-journal text-lg leading-relaxed">
          {entry.content}
        </div>
        
        {entry.images && entry.images.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            {entry.images.map((image, index) => (
              <div 
                key={index} 
                className="relative rounded-lg overflow-hidden aspect-square group hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={image} 
                  alt={`Image for ${entry.title}`} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
        
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {entry.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-journal transition-colors duration-300 hover:bg-primary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;
