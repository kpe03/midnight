import style from './style.module.css'
import React from 'react';

export default function NavBar() {
    return(
        <div className={style.navbody}>
            <p className={style.navTitle}>Midnight</p>
            <button className={style.navButton} type='button'
            >Login</button>
        </div>

    );
}
