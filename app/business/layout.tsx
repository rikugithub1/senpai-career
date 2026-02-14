/**
 * ═══════════════════════════════════════════════════════════════
 * BUSINESS LAYOUT - Layout for business section
 * ═══════════════════════════════════════════════════════════════
 *
 * This layout wraps all /business/* routes and provides:
 * - Navy/blue branding enforcement for page content
 * - Uses unified navbar from root layout
 */

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-section="business">
      {/* Business branding applied to page content */}
      {children}
    </div>
  );
}
