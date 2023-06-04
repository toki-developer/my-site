export default async function Page() {
  return (
    <div className="flex gap-8 items-center flex-col md:flex-row">
      <Card
        src={"/app-image/nft-exchange.png"}
        href="https://exchange-nft.vercel.app/"
        title="NFT 交換ツール"
      />
      <Card
        src={"/app-image/nft-history.png"}
        href="https://my-nft-history.vercel.app/"
        title="自分のNFT史"
      />
    </div>
  );
}

const Card = ({
  href,
  src,
  title,
}: {
  src: string;
  href: string;
  title: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-[280px] relative border-indigo-9 border-2"
    >
      <div className="">
        <img src={src} alt="app image" />
      </div>
      <div className="absolute bg-white opacity-20 w-full h-full top-0" />
      <p className="absolute bottom-0 right-0 bg-indigo-9 font-bold text-indigo-12 px-2 py-[1px] z-10">
        {title}
      </p>
    </a>
  );
};
