interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SkeletonLine({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ height: 14, borderRadius: 6, ...style }}
    />
  );
}

export function SkeletonCard({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ height: 120, borderRadius: 14, ...style }}
    />
  );
}

export function SkeletonAvatar({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width: 34, height: 34, borderRadius: "50%", flexShrink: 0, ...style }}
    />
  );
}

export function SkeletonStat({ className = "", style }: SkeletonProps) {
  return (
    <div className={`stat ${className}`} style={style}>
      <div className="skeleton" style={{ width: 80, height: 12, borderRadius: 4, marginBottom: 8 }} />
      <div className="skeleton" style={{ width: 50, height: 26, borderRadius: 6, marginBottom: 6 }} />
      <div className="skeleton" style={{ width: 60, height: 10, borderRadius: 4 }} />
    </div>
  );
}
