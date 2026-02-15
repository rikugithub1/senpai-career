import { ReactNode } from "react";
import Footer from "../layout/Footer";

interface PageContainerProps {
  children: ReactNode;
  maxWidth?: "160" | "180" | "275" | "325";
  includeFooter?: boolean;
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
 * <PageContainer maxWidth="180" includeFooter>
 *   <section>Your content</section>
 * </PageContainer>
 */
export default function PageContainer({
  children,
  maxWidth = "275",
  includeFooter = true,
}: PageContainerProps) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {children}
      {includeFooter && <Footer />}
    </div>
  );
}
