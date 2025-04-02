import { PropsWithChildren } from "react";
import { SKILL_LIST } from "./Home.constant";
import { Skill } from "./_skill/Skill";
import { Works } from "./_skill/_works/Works";
import { cn } from "@/utils/cn";
import { CSSProperties } from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <section>
        <h1 className="text-8xl">
          <TextWithSlideUp text="はじめまして" />
        </h1>
      </section>
      <section>
        <Title>自己紹介</Title>
        <Description>
          デザインに領域を閉じず、エンジニアリングにも染み出してきました。
        </Description>
        <p>
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          <br />
          まるでその黒きろきちらひれた髪の毛、
          <br />
        </p>
      </section>

      <section>
        <Title>経験・スキル</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Description>
        <div className="grid gap-12">
          <section>
            <SubTitle>
              N=1とデータ分析、両方の視点からユーザーの課題を見つけ、プロダクトデザインに落とし込んできました。
            </SubTitle>
            <p>
              A/Bテストを起点にユーザー理解を深め、さまざまなデザインパターンを検討した経験があります。
            </p>
            <p>
              また、営業の方のご協力のもとフィールドスタディを経て、デザインの確らしさを検証した経験があります。
            </p>
          </section>
          <section>
            <SubTitle>
              一つの事業領域の中でtoB向け、toC向けのデザインを行った経験があります。
            </SubTitle>
            <p>
              一つの機能開発でもB向け/C向けプロダクトどちらにも影響がある事業領域での業務経験から、
              <br />
              ユーザーの課題を抽出し、プロダクトデザインとして具体化する能力を身につけています。
            </p>
          </section>
          <section>
            <SubTitle>
              モダンフレームワークを利用したWebフロントエンドの開発経験
            </SubTitle>
            <p>
              Next.js App
              Routerを使った開発経験があるため、デザイン時に実装後の振る舞いを解像度高く検討できます。
            </p>
            <p>
              また、Figma,
              Storybookを使ったデザインシステムの構築を経験しているため、全体最適化を考慮したプロダクトデザインを行うことができます。
            </p>
          </section>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {SKILL_LIST.map(({ skill_type, skills }, index) => (
            <section
              key={index}
              className="flex flex-col gap-4 rounded-md border border-gray-300 p-4"
            >
              <h3
                className={cn("text-sm font-bold capitalize", {
                  "text-rose-700": skill_type === "creativity",
                  "text-indigo-700": skill_type === "technology",
                  "text-emerald-700": skill_type === "business",
                })}
              >
                {skill_type}
              </h3>
              <ul className="flex flex-col gap-2">
                {skills.map(({ name }, index) => (
                  <Skill key={index}>{name}</Skill>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section>
        <Title>関わった案件</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Description>
        <Works />
      </section>
    </div>
  );
}

const Title = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2 className={cn("mb-4 text-6xl font-bold", className)}>{children}</h2>
  );
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className="mb-6 text-gray-500">{children}</p>;
};

const SubTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="mb-3 block text-xl font-bold">{children}</h3>;
};

const TextWithSlideUp = ({ text }: { text: string }) => {
  const TextArray = text.split("");
  return (
    <div className="overflow-hidden">
      {TextArray.map((char, index) => (
        <span
          key={index}
          style={{ "--slide-up-index": index } as CSSProperties}
          aria-hidden
          className={`inline-block animate-[slideUp_calc(0.16s_*var(--slide-up-index))_var(--ease-in-out)_forwards]`}
        >
          {char}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </div>
  );
};
