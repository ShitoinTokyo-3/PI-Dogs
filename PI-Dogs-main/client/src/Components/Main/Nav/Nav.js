import OrderBy from './OrderBy/OrderBy';
import FilterTemp from './FilterTemp/FilterTemp';
import FilterOrigin from './FilterOrigin/FilterOrigin.js';
import { getDogs } from '../../../Redux/Actions';
import { Link,NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  styles  from './Nav.module.css';

export default function Nav(props){
    const dispatch = useDispatch();
    return (
        <div>
            <nav className={styles.nav}>
    {/* //-------------------------------------------------- */}
                <div className={styles.container1}>

                    <div className={styles.container1_Logo}>
                        <img src="https://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gifhttps://c.tenor.com/xtvIwLOM0n8AAAAC/puglie-pug.gif" alt="logo" className="logo"/>
                        <NavLink to="/" className={styles.container1_h2} >
                            <h2>Doggos</h2>
                        </NavLink>
                    </div>

                    <div className={styles.container1_b}>
                        <Link to={'/addDog'} >
                            <button className={styles.container1_button}><span>Add New Doggo</span></button>
                        </Link>
                    </div>

                </div>
    {/* //-------------------------------------------------- */}        
                <div className={styles.container2}>

                    <div>
                        <FilterTemp configPages={props.configPages} name='filterTemp'/>
                    </div>

 
                    <div className={styles.container2_form}>
                        <form>
                            <label className={styles.container2_custom}>
                            <input
                                type="text"
                                onChange={(e) => {
                                    dispatch(getDogs(e.target.value));
                                }}
                                required
                            />
                            <span className={styles.container2_placeholder}>Search doggos... 🐶</span>
                            </label>
                        </form>
                    </div>

                </div>
    {/* //-------------------------------------------------- */}
                <div className={styles.container3}>

                    <div >
                        <FilterOrigin configPages={props.configPages} />
                    </div>

                    <div className="">
                        <OrderBy configPages={props.configPages}/>
                    </div>

                </div>
                    
    {/* //-------------------------------------------------- */}
            </nav>
        </div>
    )
}