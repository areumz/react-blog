import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './postview.css';
import profile from '../../assets/profile.jpg';

const PostView3 = () => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <>
            {/* banner */}
		        <div className="pv-banner" >
			<div className="pv-max-width">
				<div className="pv-banner-contents">
					<p className="pv-today">May <strong>25</strong> Wednesday</p>
				</div>
			</div>
		</div>
		{/* banner */}

        {/* post view */}
        <div className="pv-view">
            <div className="pv-max-width">
            <section className="pv-wrap-box">
            <div className="pv-inner">
                {/* author */}
                <dl className="pv-author-wrap">
                    <dt className="a11y-hidden">Author</dt>
                    <dd className="pv-author"><img src={profile} alt="" /> Chilli</dd>
                    <dt className="a11y-hidden">Created</dt>
                    <dd className="pv-created">2022.05.25</dd>
                </dl>
                {/* author */}

                {/* category */}
                <dl className="pv-category">
                    <dt className="a11y-hidden">Category</dt>
                    <dd>Life</dd>
                    <dd>Style</dd>
                </dl>
                {/* category */}
                <div className="pv-title-wrap">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <button className="pv-btn-like">Like</button>
                </div>
                <hr />
                <div className="pv-view-contents">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </p>
                    <img src={process.env.PUBLIC_URL + '/assets/post-background3.jpg'} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </p>
                </div>
                <div className="pv-btn-group">
                    <a href="#" className="pv-btn-modify">
                        <span className="a11y-hidden">modify</span>
                    </a>
                    <button type="button" className="pv-btn-delete">
                        <span className="a11y-hidden">delete</span>
                    </button>
                </div>
                <Link to="/" className="pv-btn-back">
                    <span className="a11y-hidden">Back</span>
                </Link>
            </div>
        </section>
    </div>
</div>

        </>
    )
}

export default PostView3;