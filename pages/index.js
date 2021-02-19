import Header from "../src/Components/Header";

import styles from "../styles/Home.module.css";
//  import Map  from '../src/Components/Map'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../src/Components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Header />

      <div className={styles.homeContent}>
        <center>
          <p>Se puder, <i>fique em casa</i>.
          Mas se precisar, <b>saia seguro</b></p>
        </center>
        <Map />
      </div>

    </div>
  );
}
