import style from '../assets/style.module.css'
import React from 'react';

export function NavBar() {
    return(
        <div className={style.navbody}>
            <p className={style.navTitle}>Midnight</p>
            <button className={style.navButton} type='button'
            >Login</button>
        </div>

    );
}
