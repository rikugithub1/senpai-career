import Icon from "./Icon";
import { T } from "../providers/LanguageProvider";

interface EmptyStateProps {
  icon: string;
  title: { ja: string; en: string };
  description?: { ja: string; en: string };
  action?: {
    label: { ja: string; en: string };
    href?: string;
    onClick?: () => void;
  };
}

export default function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      textAlign: "center",
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        background: "var(--bg3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}>
        <Icon name={icon} size={24} style={{ color: "var(--ink4)" }} />
      </div>
      <p style={{
        fontSize: 15,
        fontWeight: 600,
        color: "var(--ink2)",
        marginBottom: description ? 6 : 0,
        fontFamily: "var(--font-display)",
      }}>
        <T ja={title.ja} en={title.en} />
      </p>
      {description && (
        <p style={{
          fontSize: 13,
          color: "var(--ink4)",
          maxWidth: 320,
          lineHeight: 1.6,
        }}>
          <T ja={description.ja} en={description.en} />
        </p>
      )}
      {action && (
        action.href ? (
          <a
            href={action.href}
            className="btn btn-accent btn-sm"
            style={{ marginTop: 16 }}
          >
            <T ja={action.label.ja} en={action.label.en} />
          </a>
        ) : (
          <button
            onClick={action.onClick}
            className="btn btn-accent btn-sm"
            style={{ marginTop: 16 }}
          >
            <T ja={action.label.ja} en={action.label.en} />
          </button>
        )
      )}
    </div>
  );
}
