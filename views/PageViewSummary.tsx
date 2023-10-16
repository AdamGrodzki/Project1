import { PageView } from "./pageView/PageView";
import { Summary } from "./summary/Summary";
import styles from "./pageViewSummary.module.scss";

export const PageViewSummary = () => {
  return (
    <div className={styles.main}>
    <div className={styles.wrapper}>
      <PageView />
      <Summary />
    </div>
    </div>
  );
};
