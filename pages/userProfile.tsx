import type { NextPage } from "next";
import styles from "../styles/UserProfile.module.scss";
import Link from "next/link";

import { useRouter } from "next/router";

const UserProfile: NextPage = () => {
  const router = useRouter();

  const {
    query: { name, age, job, company },
  } = router;

  const props = {
    name,
    age,
    job,
    company,
  };

  return (
    <div className={styles.main}>
      <h1>User Profile</h1>

      <section className={styles.userInfo}>
        <img src="./images/user.svg" alt="User Image" />
        <div>
          <p>
            Name: <span>{props.name}</span>
          </p>
          <p>
            Age: <span>{props.age}</span>
          </p>
          <p>
            Job Title: <span>{props.job}</span>
          </p>
          <p>
            Company: <span>{props.company}</span>
          </p>
        </div>
      </section>
      <Link href="/">Home</Link>
    </div>
  );
};

export default UserProfile;
