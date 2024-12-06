import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <span>Amirali</span> | React.js Full Course
        </p>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Developed by Amirali with ❤️</p>
      </footer>
    </div>
  );
}

export default Layout;
