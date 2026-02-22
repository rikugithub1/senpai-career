"use client";

import Icon from "./Icon";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

const iconMap: Record<string, string> = {
  success: "check-circle",
  error: "x-circle",
  info: "info",
  warning: "alert-circle",
};

const colorMap: Record<string, string> = {
  success: "var(--green)",
  error: "var(--red)",
  info: "var(--blue)",
  warning: "var(--yellow)",
};

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div
      className="toast-item"
      style={{ borderLeftColor: colorMap[type] }}
      role="alert"
    >
      <Icon name={iconMap[type]} size={16} style={{ color: colorMap[type], flexShrink: 0 }} />
      <span style={{ flex: 1, fontSize: 13 }}>{message}</span>
      <button
        onClick={onClose}
        style={{ color: "var(--ink4)", padding: 2, display: "flex" }}
        aria-label="Close"
      >
        <Icon name="x" size={14} />
      </button>
    </div>
  );
}
