export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav>It is Admin Side</nav>

      {children}
    </main>
  );
}
