/**
 * OB/OG LAYOUT - Layout for OB/OG (Alumni) section
 *
 * This layout wraps all /obog/* routes and provides:
 * - Amber/gold branding enforcement for page content
 * - Uses unified navbar from root layout
 */

export default function ObogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-section="obog">
      {children}
    </div>
  );
}
