import { PropsWithChildren } from "react";
import { SKILL_LIST } from "./Home.constant";
import { Skill } from "./_skill/Skill";
import { Works } from "./_skill/_works/Works";
import { cn } from "@/utils/cn";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <section>
        <Title>できること</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Description>
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

      <section>
        <Title>自己紹介</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Description>
      </section>
    </main>
  );
}

const Title = ({ children }: PropsWithChildren) => {
  return <h2 className="mb-4 text-6xl font-bold">{children}</h2>;
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className="mb-6 text-gray-500">{children}</p>;
};
