import { CatalogProvider } from "./CatalogProvider";
import { CompareTray } from "./CompareTray";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <CatalogProvider>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
    <CompareTray />
  </CatalogProvider>;
}
