import { Link,NavLink } from 'react-router-dom';
import styles from './Nav.module.css';


 export default function SecondNav(props) {
     return (
            <div >
                <nav className={styles.nav}>
                    
                    <div className={styles.container1_Logo}>
                        <img src="https://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gifhttps://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gif" alt="logo" className="logo"/>
                        <NavLink to="/dogs" className={styles.container1_h2} >
                            <h2>Doggos</h2>
                        </NavLink>
                    </div>

                </nav>
            </div>
     );
}