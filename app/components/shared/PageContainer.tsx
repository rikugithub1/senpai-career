import { ReactNode } from "react";
import Footer from "../layout/Footer";

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: "160" | "180" | "275" | "325";
  includeFooter?: boolean;
  footerSubdomain?: string;
}

/**
 * Consistent page wrapper component
 *
 * Provides standard structure for all new pages:
 * - Top padding to avoid navbar overlap
 * - Consistent max-width container
 * - Optional footer
 *
 * Usage:
 * <PageContainer maxWidth="180" includeFooter footerSubdomain="app.senpaicareer.com">
 *   <section>Your content</section>
 * </PageContainer>
 */
export default function PageContainer({
  children,
  maxWidth = "275",
  includeFooter = true,
  footerSubdomain,
}: PageContainerProps) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {children}
      {includeFooter && <Footer subdomain={footerSubdomain} />}
    </div>
  );
}
