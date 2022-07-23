import React from "react";
import styles from "./Aboutme.module.css";
import facebook from "../../../assets/Facebook.svg";
import twitter from "../../../assets/Twitter.svg";
import instagram from "../../../assets/Instagram.svg";
import github from "../../../assets/Github.svg";
import profile from "../../../assets/profile.jpg";

const Aboutme = () => {
  return (
    <aside className={styles.about}>
      <h2>About Me</h2>
      <img src={profile} alt="프로필 이미지" className={styles.userProfile} />
      <p className={styles.userName}>Chilli</p>
      <p className={styles.userDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <h3>Categories</h3>
      <ul className={styles.categories}>
        <li>
          <button href="#">Life</button>
        </li>
        <li>
          <button href="#">Style</button>
        </li>
        <li>
          <button href="#">Tech</button>
        </li>
        <li>
          <button href="#">Sport</button>
        </li>
        <li>
          <button href="#">Photo</button>
        </li>
        <li>
          <button href="#">Develop</button>
        </li>
        <li>
          <button href="#">Music</button>
        </li>
      </ul>

      <h3>Follow</h3>
      <ul className={styles.sns}>
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.github.com" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aboutme;
