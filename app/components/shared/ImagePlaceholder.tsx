interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  label: string | { ja: string; en: string };
  variant?: "screenshot" | "illustration" | "photo";
  aspectRatio?: string;
}

import { T } from "../providers/LanguageProvider";

/**
 * Image placeholder component for screenshots and illustrations
 *
 * Used throughout the site for mockups and placeholders
 * Supports both string and bilingual labels
 */
export default function ImagePlaceholder({
  width = 400,
  height = 300,
  label,
  variant = "screenshot",
  aspectRatio
}: ImagePlaceholderProps) {
  const icon = variant === "screenshot" ? "📱" : variant === "illustration" ? "🎨" : "📷";

  const style: React.CSSProperties = aspectRatio
    ? {
        aspectRatio,
        width: "100%",
        background: "var(--bg3)",
        borderColor: "var(--brd2)"
      }
    : {
        width: `${width}px`,
        height: `${height}px`,
        background: "var(--bg3)",
        borderColor: "var(--brd2)"
      };

  return (
    <div className="flex items-center justify-center rounded-lg border-2 border-dashed" style={style}>
      <div className="text-center">
        <div className="mb-2 text-2xl">{icon}</div>
        <div className="text-xs" style={{ color: "var(--ink4)" }}>
          {typeof label === "string" ? label : <T ja={label.ja} en={label.en} />}
        </div>
      </div>
    </div>
  );
}
