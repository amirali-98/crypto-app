import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <span>Amirali</span> | React.js Tutorial
        </p>
      </header>
      <main className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Develop and Design by Amirali Mansouri | Please Check my{" "}
          <a href="https://github.com/amirali-98">Github</a>
        </p>
      </footer>
    </>
  );
}
