import Image from "next/image";
import styles from "./types.module.scss";

interface Props {
  icon: string;
  title: string;
  score: number;
  id: number;
}

export const Score = ({ icon, title, score, id }: Props) => {
  return (
    <div className={styles.summaryItem} data-item-type={"accent" + id}>
      <div className={styles.group}>
        <Image src={icon} alt={title + "icon"} />
        <h3 className={styles.summeryItemTitle}>{title}</h3>
      </div>
      <p className={styles.summaryScore}>
        <span className={styles.scoreBold}>{score}</span> / 100
      </p>
    </div>
  );
};
