import style from '../assets/style.module.css'
import React from 'react';
import {userRouter} from 'next/router'

export function NavBar() {
    const Router = useRouter();
    return(
        <div className={style.navbody}>
            <p className={style.navTitle}>Midnight</p>
            <button className={style.navButton} type='button'
                onClick={() => RouterContext.push('/login')}
            >Login</button>
        </div>

    );
}
