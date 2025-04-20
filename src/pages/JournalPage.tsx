
import Layout from "@/components/layout/Layout";
import PageFlipBook from "@/components/journal/PageFlipBook";
import { getAllJournalEntries } from "@/utils/journal-data";

const JournalPage = () => {
  const entries = getAllJournalEntries();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-journal mb-2">My Travel Journal</h1>
          <p className="text-muted-foreground font-handwriting text-xl">
            A collection of memories from the Mandarmani beach trip
          </p>
        </div>
        
        <PageFlipBook entries={entries} />
      </div>
    </Layout>
  );
};

export default JournalPage;
