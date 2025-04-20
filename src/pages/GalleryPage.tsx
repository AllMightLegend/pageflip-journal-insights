
import Layout from "@/components/layout/Layout";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getAllJournalEntries } from "@/utils/journal-data";

const GalleryPage = () => {
  const entries = getAllJournalEntries();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-journal mb-2">Photo Gallery</h1>
          <p className="text-muted-foreground font-handwriting text-xl">
            Captured moments from the Mandarmani beach trip
          </p>
        </div>
        
        <GalleryGrid entries={entries} />
      </div>
    </Layout>
  );
};

export default GalleryPage;
