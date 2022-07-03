import React from "react";
import Banner from "./Banner/Banner";
import Aboutme from "./Aboutme/Aboutme";
import PostList from './PostList/PostList';
import data from '../../data/data';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div>
            <Banner />
            <div className={styles.maxWidth}>
                <Aboutme />
                <PostList postlist={data.postlist} />
            </div>
        </div>
    )
}

export default Main;