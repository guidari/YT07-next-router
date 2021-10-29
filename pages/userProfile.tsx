import type { NextPage } from "next";
import styles from "../styles/UserProfile.module.scss";
import Link from "next/link";

const UserProfile: NextPage = () => {
  return (
    <div className={styles.main}>
      <h1>User Profile</h1>

      <section className={styles.userInfo}>
        <img src="./images/user.svg" alt="User Image" />
        <div>
          <p>
            Name: <span>XXX</span>
          </p>
          <p>
            Age: <span>XXX</span>
          </p>
          <p>
            Job Title: <span>XXX</span>
          </p>
          <p>
            Company: <span>XXX</span>
          </p>
        </div>
      </section>
      <Link href="/">Home</Link>
    </div>
  );
};

export default UserProfile;
