
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="border-t py-4 text-center text-muted-foreground">
        <p className="font-journal text-sm">
          © {new Date().getFullYear()} PageFlip Journal — Created with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Layout;
