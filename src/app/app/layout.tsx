import type { Metadata } from "next";
import { Breadcrumbs } from "src/component/breadcrumbs";

export const metadata: Metadata = {
  title: "App | toki",
  description: "Toki Develper App Page",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-8 md:p-8">
      <div className="ml-4 mb-8">
        <Breadcrumbs list={[{ name: "app" }]} />
      </div>
      {children}
    </section>
  );
}
