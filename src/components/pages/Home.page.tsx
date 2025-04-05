import { PropsWithChildren } from "react";
import { SKILL_LIST, SkillType } from "./Home.constant";
import { Works } from "./_works/Works";
import { cn } from "@/utils/cn";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <section className="pt-24">
        <h1 className="palt text-8xl font-bold">
          はじめまして
          <span className="animate-wiggle inline-block">👋</span>
        </h1>
      </section>

      <section>
        <Title>自己紹介</Title>
        <Description>
          UXリサーチを通じたユーザー理解とフロントエンドの実装知識を活かし、事業とユーザー双方に価値をもたらすプロダクトデザインをリードできること。
        </Description>
        <div className="grid gap-3">
          <p>
            私はデジタルプロダクトデザイナーとして、6年間LINEヤフー株式会社に従事してきました。UXリサーチを通じてユーザー理解を深め、当事者意識を持って価値を届けることを大切にしています。
          </p>
          <p>
            単なる表層的なデザインにとどまらず、リサーチで得たインサイトを元に本質的な課題を捉え、それをプロダクトに反映できるデザインを目指してきました。
          </p>
          <p>
            また、フロントエンド開発も積極的に学習し、エンジニアと建設的な対話を重ねてきました。技術的な制約を理解した上でのデザイン提案や、実際のコードを用いたプロトタイピングを通じて、アイデアの実現可能性を検証してきました。デザインシステムの構築と改善にも携わり、保守性と一貫性を備えたUIの実現に貢献してきました。
          </p>
        </div>
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
              N=1とデータ分析、両方の視点からユーザーの課題を見つけ、プロダクトデザインに落とし込んできました。
            </SubTitle>
            <p>
              A/Bテストを起点にユーザー理解を深め、さまざまなデザインパターンを検討した経験があります。
            </p>
            <p>
              また、営業の方のご協力のもとフィールドスタディを経て、デザインの確らしさを検証した経験があります。
            </p>
            <SkillList skillType="methods" />
            <SkillList skillType="tools" />
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
            <SkillList skillType="technical" />
          </section>
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

/**
 * タイトル
 */
const Title = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2 className={cn("palt mb-4 text-5xl font-bold", className)}>
      {children}
    </h2>
  );
};

/**
 * 説明文
 */
const Description = ({ children }: PropsWithChildren) => {
  return <p className="mb-6 text-gray-500">{children}</p>;
};

/**
 * サブタイトル
 */
const SubTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="mb-3 block text-xl font-bold">{children}</h3>;
};

/**
 * スキルリスト
 */
const SkillList = ({ skillType }: { skillType: SkillType }) => {
  const title =
    skillType === "methods"
      ? "手法"
      : skillType === "tools"
        ? "ツール"
        : "技術";

  return (
    <section className="mt-8 grid grid-cols-[60px_auto] gap-2">
      <h3 className="font-bold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {SKILL_LIST.filter(
          ({ skill_type }) => skill_type === skillType,
        )[0].skills.map(({ name }, index) => (
          <li key={index} className="rounded-md bg-amber-50 px-2 py-1">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};
