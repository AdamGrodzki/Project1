import styles from "./summary.module.scss";
import { data } from "../../static/data";
import { Score } from "./types/score";

export const Summary = () => {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles.flow}>
        {data.map((item) => (
          <Score
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            score={item.score}
          />
        ))}
      </div>
      <button className={styles.button}>Continue</button>
    </div>
  );
};
