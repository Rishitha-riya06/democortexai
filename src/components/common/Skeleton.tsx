export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export function Skeleton({
  className = '',
  width = '100%',
  height = '20px',
  borderRadius = '4px',
}: SkeletonProps) {
  return (
    <div
      className={`skeleton-loader ${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        animation: 'pulse 1.5s ease-in-out infinite',
      }}
    />
  );
}
