import type { ReactNode } from "react";

export default async function Page() {
  return (
    <div className="w-[700px] mx-auto">
      <article className="mt-20 flex gap-x-8 items-center">
        <img
          src="profile.png"
          alt="profile"
          className="w-20 h-20 rounded-full"
        />
        <article className="">
          <p>
            社会人1年目のエンジニア
            <br />
            本業はメガベンで、web3界隈でも活動できるように勉強中
          </p>
        </article>
      </article>
      <div className="flex justify-between mt-20">
        <TwitterCard />
        <QiitaCard />
        <DevCard />
      </div>
    </div>
  );
}

const TwitterCard = () => {
  return (
    <Card className="from-twitterLight via-twitter to-twitterDark">
      <img src="logo/twitter-logo-white.png" alt="twitter logo" />
    </Card>
  );
};

const QiitaCard = () => {
  return (
    <Card className="from-qiita to-qiita px-0">
      <img src="logo/qiita.png" alt="Qiita logo" />
    </Card>
  );
};

const DevCard = () => {
  return (
    <Card className="from-indigo-12 via-indigo-11 to-indigo-10">
      <div className="text-6xl">🧑‍💻</div>
      <p className="font-bold pt-1">App</p>
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
      className={`w-32 h-32 px-8 py-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

//TODO: 開発依頼 & 修正依頼のカードを作る
//TODO: ブログのカードを作る
//TODO: 寄付ボタンを作る
