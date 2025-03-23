"use clinet";

import { ComponentProps } from "react";
import styles from "./Skill.module.css";

export const Skill = ({
  children,
  ...props
}: Omit<ComponentProps<"button">, "type">) => {
  return (
    <li>
      <button {...props} type="button" className={styles.skill}>
        {children}
      </button>
    </li>
  );
};
