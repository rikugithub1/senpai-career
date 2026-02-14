import { ReactNode } from "react";
import AuthSidePanel from "./AuthSidePanel";

interface AuthLayoutProps {
  children: ReactNode;
  type: "community" | "business";
}

/**
 * Auth Layout Component
 *
 * Split-screen layout for login/signup pages
 * - Left: Brand messaging panel (hidden on mobile)
 * - Right: Auth form content
 */
export default function AuthLayout({ children, type }: AuthLayoutProps) {
  return (
    <div
      className="flex min-h-screen"
      style={{ paddingTop: "var(--nav-height)" }}
      data-section={type}
    >
      {/* Left: Brand Panel */}
      <AuthSidePanel type={type} />

      {/* Right: Form Content */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2" style={{ background: "var(--bg2)" }}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
