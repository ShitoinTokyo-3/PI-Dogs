import OrderBy from './OrderBy/OrderBy';
import FilterTemp from './FilterTemp/FilterTemp';
import FilterOrigin from './FilterOrigin/FilterOrigin.js';
import { getDogs } from '../../../Redux/Actions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Nav(props){
    const dispatch = useDispatch();
    return (
        <div className="nav">
            <nav className=''>
                <div className="">
                    <h2>Doggos</h2>
                </div>
                <div className="">
                    <Link to={'/addDog'}>
                        <button>Add New Doggo</button>
                    </Link>
                </div>
                <div className="">
                    <div className="">
                        <OrderBy configPages={props.configPages}/>
                    </div>
                    <div className="">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search doggos... 🐶"
                                onChange={(e) => {
                                    dispatch(getDogs(e.target.value));
                                }}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className=''>
                        <label>Filter By</label>
                        <FilterTemp configPages={props.configPages} />
                        <FilterOrigin configPages={props.configPages} />
                    </div>
                </div>
            </nav>
        </div>
    )
}