import HorizontalNav from "@/components/HorizontalNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <HorizontalNav />
      {children}
    </main>
  );
}
