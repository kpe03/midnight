//home page
import style from '../assets/style.module.css'

export function Home() {
    return(
        <div className={style.homePage}>
            <div className='header'> 
                <p className={style.homeh1}> Welcome </p>
            </div>
            <div className='forYou'>
                <p className={style.homeh2}>For you</p>
            </div>
        </div>
    );
}