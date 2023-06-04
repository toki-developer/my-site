import Link from "next/link";

type Item = {
  href?: string | null;
  name: string;
};

type Props = {
  list: Item[];
};

export const Breadcrumbs = ({ list }: Props) => {
  return (
    <div className="flex">
      <Link href="/" className="text-slate-12">
        home
      </Link>
      {list.map((item) => {
        return (
          <div key={item.name} className="text-slate-12">
            <span className="text-slate-11 px-1">/</span>
            {item.href ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
