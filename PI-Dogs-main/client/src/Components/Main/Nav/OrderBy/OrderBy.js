import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../../../Redux/Actions";
import style from "./OrderBy.module.css";

export default function OrderBy(props) {
    const [order, setOrder] = useState('Alphabetically');
    const dispatch = useDispatch();
    return (
        <div className={style.containerContainer}>
            <div className={style.container}>
                <label htmlFor="order" className="">Sort by: </label>
                <div className={style.select}>
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
            </div>

            <div className={style.container2}>
                <label className="">Order by: </label>

                <div className={style.buttons}>
                    <button onClick={() => {
                        console.log(order)
                        dispatch(orderBy(order, 'Ascending'))
                        props.configPages('restart');
                    }}><span></span>Ascending</button>

                    <button onClick={() => {
                            console.log(order)
                            dispatch(orderBy(order, 'Descending'))
                            props.configPages('restart');
                        }}><span></span>Descending</button>
                </div>

            </div>
        </div>
    )
}