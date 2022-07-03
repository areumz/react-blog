import React from "react";
import Post from '../Post/Post';
import styles from './PostList.module.css';

const PostList = ({postlist}) => {

    return (
        <>
            <h2 className="a11y-hidden">Post</h2>
            <ul className={styles.postList}>
                <Post postlist={postlist}/>
            </ul>
        </>
    )
}

export default PostList;