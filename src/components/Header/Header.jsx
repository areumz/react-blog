import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Logo.svg'
import profile from '../../assets/profile.jpg'
import iconModifyWhite from '../../assets/icon-modify-white.svg'
import iconLogout from '../../assets/icon-logout.svg'
import iconLogin from '../../assets/icon-login.svg'
import iconRegister from '../../assets/icon-register.svg'

const Header = () => {
    const [userstate, setUserstate] = useState(false);

    const clickLogout = () => {
        setUserstate(true)
    }

    const clickLogin = () => {
        setUserstate(false)
    }

    return (
        <>
            <header>
			    <div className={styles.maxWidth}>
                    <Link to='/'>
                    <h1  tabIndex="1">
						<img src={logo} alt="My Blog" />
				    </h1>
                    </Link>
				    <ul>
                    {userstate ?
                    <>
                    	<li>
                            <button className={styles.btnGray}
                            onClick={clickLogin}>
                                <img src={iconLogin} alt="" />
                                <span>Login</span>
                            </button>
                        </li>
                        <li className={styles.onlypc}>
                            <button className={styles.btnGray}>
                                <img src={iconRegister} alt="" />
                                <span>Register</span>
                            </button>
                        </li>
                    </>
                    :
                    <>
                        <li className={styles.profileImg}>
						    <img src={profile} alt="My Page" 
                            tabIndex="1"/>
					    </li>
					    <li>
                            <button className={styles.btnWrite}>
							    <img src={iconModifyWhite} alt="" />
							    <span>Write</span>
                            </button>
					    </li>
					    <li>
						    <button className={styles.btnWhite}
                            onClick={clickLogout}>
							<img src={iconLogout} alt="" />
							<span>Logout</span>
						    </button>
					    </li>
                    </>
                    }

                    </ul>
			    </div>
		    </header>
        </>
    )
}

export default Header;