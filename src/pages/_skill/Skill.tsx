"use clinet";

import { PropsWithChildren } from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import styles from "./Skill.module.css";

export const Skill = ({ children }: PropsWithChildren) => {
  return (
    <li>
      <Dialog.Root>
        <Dialog.Trigger className={styles.skill}>{children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Popup className={styles.popup}>
            <Dialog.Title>{children}</Dialog.Title>
            <Dialog.Description>あああああ</Dialog.Description>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </li>
  );
};
