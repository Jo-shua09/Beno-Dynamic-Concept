import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "@/components/PageLoader";

interface LayoutProps {
  children: ReactNode;
  loading?: boolean;
}

const Layout = ({ children, loading = false }: LayoutProps) => {
  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
