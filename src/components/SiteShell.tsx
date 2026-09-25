import { CatalogProvider } from "./CatalogProvider";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Header + page content + footer, sharing one search state per page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CatalogProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </CatalogProvider>
  );
}
