export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // No navbar, no footer
}
