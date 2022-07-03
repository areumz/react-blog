import React from "react";
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.maxWidth}>
                <div className={styles.bannerContents}>
                    <p className={styles.subTxt}>React Blog</p>
                    <p className={styles.mainTxt}>My BLOG</p>
                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;