import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full max-w-7xl mx-auto px-6 flex gap-12 overflow-hidden">
      <Sidebar />
      <main className="flex-1 min-w-0 doc-prose max-w-none pt-6 pb-16 pr-6 overflow-y-auto [scrollbar-gutter:stable]">
        {children}
      </main>
    </div>
  );
}
