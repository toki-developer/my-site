import type { ReactNode } from "react";

export default async function Page() {
  return (
    <div className="md:w-[700px] mx-auto px-6 md:px-0">
      <article className="mt-20 flex gap-x-8 items-center">
        <img
          src="profile.png"
          alt="profile"
          className="w-14 h-14 md:w-20 md:h-20 rounded-full"
        />
        <article className="">
          <p className="text-sm">
            社会人1年目のエンジニア
            <br />
            本業はメガベンで、web3界隈でも活動できるように勉強中
          </p>
        </article>
      </article>
      <div className="flex justify-between mt-20 flex-wrap gap-4">
        <TwitterCard />
        <QiitaCard />
        <DevCard />
      </div>
    </div>
  );
}

const TwitterCard = () => {
  const twitterUrl = "https://twitter.com/toki_dev";
  return (
    <a href={twitterUrl} target="_blank" rel="noopener">
      <Card className="from-twitterLight via-twitter to-twitterDark">
        <img src="logo/twitter-logo-white.png" alt="twitter logo" />
      </Card>
    </a>
  );
};

const QiitaCard = () => {
  const qiitaUrl = "https://qiita.com/toki_dev";
  return (
    <a href={qiitaUrl} target="_blank" rel="noopener">
      <Card className="from-qiita to-qiita !px-0">
        <img src="logo/qiita.png" alt="Qiita logo" />
      </Card>
    </a>
  );
};

const DevCard = () => {
  return (
    <Card className="from-indigo-12 via-indigo-11 to-indigo-10">
      <div className="text-3xl md:text-6xl">🧑‍💻</div>
      <p className="font-bold md:pt-1">App</p>
    </Card>
  );
};

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-20 h-20 md:w-32 md:h-32 px-4 py-4 md:px-8 md:py-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

//TODO: 開発依頼 & 修正依頼のカードを作る
//TODO: ブログのカードを作る
//TODO: 寄付ボタンを作る
//TODO: Appの遷移先を作る
//TODO: スマホサイズ作る
