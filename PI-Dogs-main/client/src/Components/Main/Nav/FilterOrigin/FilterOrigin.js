import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../../../Redux/Actions";
import style from "./FilterOrigin.module.css";

export default function FilterOrigin(props) {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <button 
        onClick={(e) => {
          dispatch(filterByOrigin("ALL"));
          props.configPages('restart');
        }}
      >
        <span></span>All
      </button>

      <button 
        onClick={(e) => {
          dispatch(filterByOrigin("API"));
          props.configPages('restart');
        }}
      >
        <span></span>API
      </button>

      <button 
        onClick={(e) => {
          dispatch(filterByOrigin("DB"));
          props.configPages('restart');
        }}
      >
        <span></span>DataBase
      </button>
    </div>
  );
}