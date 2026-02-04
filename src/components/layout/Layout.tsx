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
    <div className="min-h-screen bg-background w-full max-w-[185rem] mx-auto overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
