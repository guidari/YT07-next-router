import type { NextPage } from "next";
import Router from "next/router";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const name = "John Doe";
  const age = 27;
  const job = "Software Engineer";
  const company = "Google";

  function sendProps() {
    Router.push({
      pathname: "/userProfile",
      query: {
        name,
        age,
        job,
        company,
      },
    });
  }

  return (
    <div className={styles.main}>
      <h1>How to use Next Router?</h1>

      <a onClick={() => sendProps()}>Send props</a>
    </div>
  );
};

export default Home;
