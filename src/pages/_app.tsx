// Import the ErrorBoundary component
import ErrorBoundary from "@/components/ErrorBoundary";
import "../globals/globals.css";
import Nav from "@/components/Nav";
import HorizontalNav from "@/components/HorizontalNav";

function MyApp({ Component, pageProps }: any) {
  return (
    // Wrap the Component prop with ErrorBoundary component
    <main>
      <Nav />
      <div className="flex">
        <HorizontalNav />
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default MyApp;
