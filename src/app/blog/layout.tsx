import type { Metadata } from "next";
import { Breadcrumbs } from "src/component/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | toki",
  description: "Toki Develper Blog Page",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 md:p-8">
      <div className="ml-4 mb-8">
        <Breadcrumbs list={[{ name: "blog" }]} />
      </div>
      {children}
    </section>
  );
}
