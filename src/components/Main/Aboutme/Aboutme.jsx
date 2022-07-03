import React from "react";
import styles from './Aboutme.module.css';
import facebook from '../../../assets/Facebook.svg';
import twitter from '../../../assets/Twitter.svg';
import instagram from '../../../assets/Instagram.svg';
import github from '../../../assets/Github.svg';

const Aboutme = () => {
    return (
        <aside className={styles.about}>
            <h2>About Me</h2>
                <img src="../../assets/profile.jpg" alt="프로필 이미지" className={styles.userProfile} />
                <p className={styles.userName}>Chilli</p>
                <p className={styles.userDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <h3>Categories</h3>
                <ul className={styles.categories}>
                    <li><button href="#">Life</button></li>
                    <li><button href="#">Style</button></li>
                    <li><button href="#">Tech</button></li>
                    <li><button href="#">Sport</button></li>
                    <li><button href="#">Photo</button></li>
                    <li><button href="#">Develop</button></li>
                    <li><button href="#">Music</button></li>
                </ul>

                <h3>Follow</h3>
                <ul className={styles.sns}>
                    <li>
                        <button onClick={()=> window.open('www.facebook.com', '_blank')}>
                            <img src={facebook} alt="Facebook" />
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> window.open('www.twitter.com', '_blank')}>
                            <img src={twitter} alt="Twitter" />
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> window.open('www.instagram.com', '_blank')}>
                            <img src={instagram} alt="Instagram" />
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> window.open('www.github.com', '_blank')}>
                            <img src={github} alt="GitHub" />
                        </button>
                    </li>
                </ul>
    </aside>
    )
}

export default Aboutme;