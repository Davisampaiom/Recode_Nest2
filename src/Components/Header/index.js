import React from "react";
import Link from "next/link";

import styles from '../components.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link  href="/"><a className={styles.link}>Home</a></Link>
      <Link  href="Alertas"><a className={styles.link}>Alartas</a></Link>
      <Link  href="Login"><a className={styles.link}>Login</a></Link>

    </div>
  );
}
