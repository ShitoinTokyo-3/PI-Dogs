import {useDispatch, useSelector} from "react-redux";
import { filterByTemperaments } from "../../../../Redux/Actions";

export default function FilterTemp(props){
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temperamentsRender);

    return (
        <div>
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
    )
}