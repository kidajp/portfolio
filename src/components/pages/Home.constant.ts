export const SKILL_LIST = [
  {
    skill_type: "methods",
    skills: [
      {
        name: "ワイヤーフレーム",
      },
      {
        name: "ヒューリスティック評価",
      },
      {
        name: "ユーザビリティテスト",
      },
      {
        name: "A/Bテスト",
      },
      {
        name: "フィールドスタディ",
      },
      {
        name: "カスタマージャーニーマップ",
      },
    ],
  },
  {
    skill_type: "tools",
    skills: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
      { name: "Adobe Photoshop" },
      { name: "Adobe After Effects" },
      { name: "Slack" },
      { name: "Miro" },
      { name: "GitHub" },
      { name: "Jira" },
      { name: "Zoom" },
    ],
  },
  {
    skill_type: "technical",
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript(TypeScript)",
      },
      {
        name: "React(Next.js)",
      },
      {
        name: "Vue",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Storybook",
      },
      {
        name: "デザインシステム",
      },
    ],
  },
] as const;

export type SkillType = (typeof SKILL_LIST)[number]["skill_type"];
