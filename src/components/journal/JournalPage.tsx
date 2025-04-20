
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
    <div className={`diary-page h-[733px] w-[550px] ${isEven ? 'bg-card' : 'bg-muted/30'}`}>
      <div className="p-8 overflow-y-auto h-full">
        <div className="mb-4 border-b pb-2">
          <h2 className="text-2xl font-bold font-journal text-primary">
            {entry.title}
          </h2>
          <p className="text-sm text-muted-foreground font-journal">
            {formatDate(entry.date)}
            {entry.location && ` · ${entry.location}`}
            {entry.mood && ` · Mood: ${entry.mood}`}
          </p>
        </div>
        
        <div className="journal-content whitespace-pre-line mb-4">
          {entry.content}
        </div>
        
        {entry.images && entry.images.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {entry.images.map((image, index) => (
              <div key={index} className="relative rounded-md overflow-hidden aspect-square">
                <img 
                  src={image} 
                  alt={`Image for ${entry.title}`} 
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
        
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
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
