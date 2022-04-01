import {useDispatch, useSelector} from "react-redux";
import { filterByTemperaments } from "../../../../Redux/Actions";
import style from "./FilterTemp.module.css";

export default function FilterTemp(props){
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temperamentsRender);

    return (
        <div className={style.container}>
            <label htmlFor='filterTemp'>Filter</label>
            <div className={style.select}>
                <select
                    name="temperament"
                    id="temperament"
                    onChange={(e) =>{ 
                        dispatch(filterByTemperaments(e.target.value));
                        props.configPages('restart');
                    }}
                    
                >
                    <option value="All">All</option>
                    {temps.map(temp => 
                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                    )};
                </select>
            </div>
        </div>
    )
}