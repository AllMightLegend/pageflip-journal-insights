
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllJournalEntries } from "@/utils/journal-data";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CalendarPage = () => {
  const entries = getAllJournalEntries();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Create a map of dates with entries
  const datesWithEntries = entries.reduce<Record<string, boolean>>((acc, entry) => {
    const dateStr = entry.date;
    acc[dateStr] = true;
    return acc;
  }, {});
  
  // Get the entry for the selected date
  const selectedEntry = date 
    ? entries.find(entry => entry.date === format(date, 'yyyy-MM-dd'))
    : undefined;
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-journal mb-2">Journal Calendar</h1>
          <p className="text-muted-foreground font-handwriting text-xl">
            Browse your entries by date
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 shadow-md">
            <CardContent className="pt-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiersClassNames={{
                  selected: "bg-primary text-primary-foreground",
                  today: "bg-accent text-accent-foreground"
                }}
                modifiers={{
                  entry: (date) => {
                    const dateStr = format(date, 'yyyy-MM-dd');
                    return !!datesWithEntries[dateStr];
                  }
                }}
                modifiersStyles={{
                  entry: {
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    color: 'hsl(var(--primary))'
                  }
                }}
              />
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 shadow-md">
            <CardContent className="pt-6">
              {selectedEntry ? (
                <div>
                  <h2 className="text-2xl font-bold font-journal mb-2">{selectedEntry.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {format(new Date(selectedEntry.date), 'MMMM d, yyyy')}
                    {selectedEntry.location && ` · ${selectedEntry.location}`}
                  </p>
                  
                  <div className="journal-content mb-4">
                    {selectedEntry.content.length > 300 
                      ? `${selectedEntry.content.slice(0, 300)}...` 
                      : selectedEntry.content}
                  </div>
                  
                  {selectedEntry.images && selectedEntry.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {selectedEntry.images.slice(0, 3).map((image, index) => (
                        <div key={index} className="aspect-square rounded-md overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Image for ${selectedEntry.title}`} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link to="/">
                    <Button variant="outline">
                      Read Full Entry
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground font-journal text-xl">
                    Select a date to view an entry
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
