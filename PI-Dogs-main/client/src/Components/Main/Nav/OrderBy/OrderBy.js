import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../../../Redux/Actions";

export default function OrderBy(props) {
    const [order, setOrder] = useState('Alphabetically');
    const dispatch = useDispatch();
    return (
        <div className="">
            <div>
                <label htmlFor="order" className="">Order By: </label>
                <select
                    onChange={(e) =>{
                        setOrder(e.target.value);
                        dispatch(orderBy(e.target.value, 'Ascending'))
                        props.configPages('restart');
                        }}       
                    name="order"
                    id="order"
                >
                    <option value="Alphabetically">Alphabetically</option>
                    <option value="Weight">Weight</option>
                </select>
            </div>
            <div>
                <label className="">Order: </label>
                <button onClick={() => {
                    console.log(order)
                    dispatch(orderBy(order, 'Ascending'))
                    props.configPages('restart');
                 }}>Ascending</button>

                <button onClick={() => {
                        console.log(order)
                        dispatch(orderBy(order, 'Descending'))
                        props.configPages('restart');
                     }}>Descending</button>

            </div>
        </div>
    )
}