import Loader from "@/components/ui/loader";

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader size="lg" className="mb-4" />
      </div>
    </div>
  );
};

export default PageLoader;
