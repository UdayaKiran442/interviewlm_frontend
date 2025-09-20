export default function StatsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1 justify-center">
      {children}
    </div>
  );
}
