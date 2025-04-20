
import { useState, useEffect } from "react";
import { JournalEntry } from "@/types";
import JournalPage from "./JournalPage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageFlipBookProps {
  entries: JournalEntry[];
}

const PageFlipBook = ({ entries }: PageFlipBookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  
  const totalPages = Math.ceil(entries.length / 2);
  
  const getEntriesForSpread = () => {
    const startIdx = currentPage * 2;
    return [
      entries[startIdx] || null,
      entries[startIdx + 1] || null,
    ];
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0 && !flipping) {
      setFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setFlipping(false);
        setFlipDirection(null);
      }, 500);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages - 1 && !flipping) {
      setFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setFlipping(false);
        setFlipDirection(null);
      }, 500);
    }
  };
  
  const currentEntries = getEntriesForSpread();
  
  return (
    <div className="relative mx-auto max-w-5xl my-10">
      <div className={`
        relative flex transition-all duration-500 transform
        ${flipping && flipDirection === 'next' ? 'animate-page-flip-right' : ''}
        ${flipping && flipDirection === 'prev' ? 'animate-page-flip-left' : ''}
      `}>
        <div className="w-1/2 h-full shadow-inner mr-0.5">
          {currentEntries[0] && (
            <JournalPage entry={currentEntries[0]} isEven={true} />
          )}
        </div>
        <div className="w-1/2 h-full shadow-inner ml-0.5">
          {currentEntries[1] && (
            <JournalPage entry={currentEntries[1]} isEven={false} />
          )}
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrevPage}
        disabled={currentPage <= 0 || flipping}
        className="page-turn-prev"
        aria-label="Previous page"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNextPage}
        disabled={currentPage >= totalPages - 1 || flipping}
        className="page-turn-next"
        aria-label="Next page"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
      
      <div className="text-center mt-4 text-sm text-muted-foreground">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
};

export default PageFlipBook;
