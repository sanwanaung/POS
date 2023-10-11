export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>It is Admin Side</nav>

      {children}
    </section>
  );
}
