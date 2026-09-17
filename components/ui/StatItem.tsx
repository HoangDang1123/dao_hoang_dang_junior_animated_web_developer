export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <small>{label}</small>
    </div>
  );
}
