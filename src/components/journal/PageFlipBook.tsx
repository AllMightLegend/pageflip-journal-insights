
import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { JournalEntry } from "@/types";
import JournalPage from "./JournalPage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageFlipBookProps {
  entries: JournalEntry[];
}

const PageFlipBook = ({ entries }: PageFlipBookProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);
  
  // Calculate total pages including blank pages to maintain even number
  const totalPages = Math.ceil(entries.length / 2) * 2;
  
  const handlePageFlip = (e: any) => {
    setCurrentPage(e.data);
  };
  
  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };
  
  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };
  
  // Create array of page entries including blanks
  const pageEntries = [...entries];
  while (pageEntries.length < totalPages) {
    pageEntries.push(null);
  }
  
  return (
    <div className="relative mx-auto my-10 px-4">
      <div className="flex justify-center perspective-[2000px]">
        <HTMLFlipBook
          width={550}
          height={733}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handlePageFlip}
          className="shadow-2xl"
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          ref={bookRef}
          style={{ backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)" }}
        >
          {pageEntries.map((entry, index) => (
            <div key={index} className="page-wrapper">
              {entry ? (
                <JournalPage entry={entry} isEven={index % 2 === 0} />
              ) : (
                <div className="diary-page page-shadow bg-gradient-to-br from-card to-muted/30 h-[733px]" />
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      
      <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 px-8">
        <Button
          variant="secondary"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="rounded-full bg-background/80 hover:bg-background shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
          aria-label="Previous page"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          onClick={nextPage}
          disabled={currentPage >= totalPages - 2}
          className="rounded-full bg-background/80 hover:bg-background shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
          aria-label="Next page"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="text-center mt-6 text-sm font-journal text-muted-foreground">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
};

export default PageFlipBook;
