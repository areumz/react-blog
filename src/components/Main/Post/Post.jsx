import React from "react";
import { Link } from "react-router-dom";
import styles from './Post.module.css';

const Post = ({key, post, postlist}) => {
    return (
        <>
            <Link to='/post/1'>
                <li key={postlist[0].id} className={styles.post}>
                    <article>
                        <img src={postlist[0].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl className={styles.category}>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[0].category[0]}</dd>
                                    <dd>{postlist[0].category[1]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl className={styles.authorWrap}>
			    	    		<dt class="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt class="a11y-hidden">Created</dt>
			    	    			<dd className={styles.created}>2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
            </Link>

            <Link to='/post/2'>
                <li key={postlist[1].id} className={styles.post}>
                    <article>
                        <img src={postlist[1].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[1].category[0]}</dd>
                                    <dd>{postlist[1].category[0]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl class={styles.authorWrap}>
			    	    		<dt class="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt class="a11y-hidden">Created</dt>
			    	    			<dd class={styles.created}>2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
            </Link>
            
            <Link to='/post/3'>
            <li key={postlist[2].id} className={styles.post}>
                
                    <article>
                        <img src={postlist[2].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[2].category[0]}</dd>
                                    <dd>{postlist[2].category[1]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl className={styles.authorWrap}>
			    	    		<dt className="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt className="a11y-hidden">Created</dt>
			    	    			<dd className={styles.created}>2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
            </Link>
            
            <Link to='/post/4'>
                <li key={postlist[3].id} className={styles.post}>
                    <article>
                        <img src={postlist[3].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[3].category[0]}</dd>
                                    <dd>{postlist[3].category[1]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl className={styles.authorWrap}>
			    	    		<dt className="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt className="a11y-hidden">Created</dt>
			    	    			<dd className={styles.created}>2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
                
            </Link>
            
            <Link to='/post/5'>
                <li key={postlist[4].id} className={styles.post}>
                    <article>
                        <img src={postlist[4].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[4].category[0]}</dd>
                                    <dd>{postlist[5].category[1]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl className={styles.authorWrap}>
			    	    		<dt class="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt className="a11y-hidden">Created</dt>
			    	    			<dd className="created">2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
            </Link>
            
            <Link to='/post/6'>
                <li key={postlist[5].id} className={styles.post}>
                    <article>
                        <img src={postlist[5].thumbnail} alt="" />
                        <div className={styles.contentsWrap}>
                            <dl>
                                <dt className="a11y-hidden">Category</dt>
                                    <dd>{postlist[5].category[0]}</dd>
                                    <dd>{postlist[5].category[1]}</dd>
                            </dl>
                            <h3>Lorem, ipsum dolor sit amet     consectetur     adipisicing elit</h3>
                            <dl className={styles.authorWrap}>
			    	    		<dt className="a11y-hidden">Author</dt>
			    	    			<dd className={styles.author}><img src="../../assets/profile.jpg" alt="" />   Chilli</dd>
			    	    		<dt className="a11y-hidden">Created</dt>
			    	    			<dd className={styles.created}>2022.05.25</dd>
			    	    	</dl>
                            <p className={styles.postDescription}>
                                Lorem ipsum dolor sit amet consectetur,     adipisicing elit. Inventore     illumnostrum     perferendis voluptas,  voluptatesoluta   corrupti dolore    quidem. Placeat,eaque!    Exercitationem   est
                                facilis dolor quas odio cum         inciduntrepudiandae vel. Lorem ipsum    dolor  sitamet consectetur, adipisicing    elit.   Inventore illum nostrum    perferendisvoluptas,   voluptate soluta
                                corrupti dolore quidem. Placeat,        eaque!Exercitationem est facilis    dolor     quasodio cum incidunt    repudiandae vel.  Loremipsum dolor sit     amet consectetur,   adipisicing elit.   Inventore
                                illum nostrum perferendis voluptas, voluptate    soluta corrupti dolore  quidem.Placeat,     eaque!   Exercitationem estfacilis dolor quas      odio cum inciduntrepudiandae vel. Lorem  ipsum
                                dolor sit amet consectetur,     adipisicingelit.    Inventore illum     nostrumperferendis voluptas,   voluptate    solutacorrupti dolore quidem.   Placeat,   eaque!Exercitationem est facilis
                                dolor quas odio cum incidunt    repudiandaevel."
                            </p>
                        </div>
                    </article>
                    </li>
            </Link>
        </>
    )
}

export default Post;