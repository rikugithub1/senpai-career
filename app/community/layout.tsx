/**
 * ═══════════════════════════════════════════════════════════════
 * COMMUNITY LAYOUT - Layout for community section
 * ═══════════════════════════════════════════════════════════════
 *
 * This layout wraps all /community/* routes and provides:
 * - Teal branding enforcement for page content
 * - Uses unified navbar from root layout
 */

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-section="community">
      {/* Community branding applied to page content */}
      {children}
    </div>
  );
}
