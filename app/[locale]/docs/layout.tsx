import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-16 flex gap-12">
      <Sidebar />
      <main className="flex-1 min-w-0 doc-prose max-w-none pt-6">
        {children}
      </main>
    </div>
  );
}
