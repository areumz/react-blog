import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer>
			    <div className={styles.maxWidth}>
				<h2>©Weniv Corp.</h2>
				<button className={styles.btnTop}>TOP</button>
			    </div>
            </footer>
        </div>
    )
}

export default Footer;