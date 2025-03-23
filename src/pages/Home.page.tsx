import { SKILL_LIST } from "./Home.constant";
import { Skill } from "./_skill/Skill";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={styles.wrapper}>
        {SKILL_LIST.map(({ skill_type, skills }, index) => (
          <section key={index} className={styles[`circle-${skill_type}`]}>
            <h2 className={styles[`title-${skill_type}`]}>{skill_type}</h2>
            <ul>
              {skills.map(({ name }, index) => (
                <Skill key={index}>{name}</Skill>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
