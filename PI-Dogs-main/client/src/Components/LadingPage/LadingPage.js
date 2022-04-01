import {Link} from 'react-router-dom'
import styles from './LadingPage.module.css'

export default function LadingPage(){
    return (
        <div>
            <div className={styles.nav}>
                <img src="https://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gifhttps://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gif" alt="logo" className="logo"/>
                <a href="https://github.com/ShitoinTokyo-3?tab=repositories" target={'_blank'}>@ShitoinTokyo-3</a>
            </div>
            <div className={styles.container_flex}>
                <div className={styles.container}>
                    <span className={styles.titulo}>Doggos!</span>
                    <div className={styles.container_info}>
                        <div className={styles.info}>
                            <h2>Find your favorite dog breed</h2>
                            <h2>Look at their details</h2>
                            <h2>Create your Doggo breed</h2>
                        </div>
                        <div className={styles.containerButton}>
                            <Link to={'/dogs'}>
                                <button className={styles.button}>Comenzar!!!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}