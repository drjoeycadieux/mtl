import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.navbar}>
          <ul>
            <li><p>Montreal Bikes Rides</p></li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div> 
      </div>

      <div className={styles.header}>
        <p>
          Montreal Bikes Rides
        </p>
      </div>
    </main>
  );
}
