export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen w-full bg-gray-100">{children}</div>;
}
