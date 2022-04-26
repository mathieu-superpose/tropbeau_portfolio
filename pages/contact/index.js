import styles from "./Contact.module.scss";

const Arrow = () => {
  return (
    <svg
      width="80"
      height="76"
      viewBox="0 0 80 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrow}
    >
      <path
        d="M27.8564 65.9389L24.9885 70.0347L33.1801 75.7705L36.0479 71.6747L27.8564 65.9389ZM79.4719 0.941689L27.1462 25.3416L74.4399 58.457L79.4719 0.941689ZM36.0479 71.6747L57.7567 40.6714L49.5652 34.9356L27.8564 65.9389L36.0479 71.6747Z"
        fill="black"
      />
    </svg>
  );
};

export default function Contact() {
  return (
    <main className={styles.Contact}>
      <h1>Contact</h1>
      <div className={styles.container}>
        <ul className={styles.card}>
          <Arrow />
          <li>
            <p>Linkedin</p>
          </li>
          <li>
            <p>Github</p>
          </li>
          <li>
            <p>Codewars</p>
          </li>
        </ul>
        <div className={styles.card}>
          <Arrow />
          <p>send me a mail</p>
          <p>vraiment@tropbeau.site</p>
        </div>
      </div>
    </main>
  );
}
