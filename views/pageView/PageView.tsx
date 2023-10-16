import styles from "./pageView.module.scss";

export const PageView = () => {
  return (
    <div className={styles.result}>
      <h1 className={styles.title}>Your Result</h1>
      <div className={styles.circle}>
        <p className={styles.score}>76</p>
        <p>of 100</p>
      </div>
      <p className={styles.scoreTxt}>Great</p>
      <p className={styles.description}>
        You scored higher than 65% of the people who have taken these tests
      </p>
    </div>
  );
};
