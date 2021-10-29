import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Home: NextPage = () => {
  const name = "John Doe";
  const age = 27;
  const job = "Software Engineer";
  const company = "Google";

  return (
    <div className={styles.main}>
      <h1>How to use Next Router?</h1>

      <Link href="/userProfile">Send Props</Link>
    </div>
  );
};

export default Home;
