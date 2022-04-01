import {Link} from 'react-router-dom';
import style from './Card.module.css';

export default function Card(props) {
  return (
    <div className={style.container}>
        <div className={style.containerBig}>
            <Link to={`/dogs/${props.id}`}>
                <div >
                    <div className={style.container_Img}>
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className={style.container_name}>
                        <span>{props.name}</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className={style.containerBig2}>
            <div className={style.container_weight}>
                <span><span>Weight: </span>min {props.weight.split(' - ')[0]} - max {props.weight.split(' - ')[1]}</span>
            </div>
            <div className={style.container_temps}>
                <label>Temps: </label>
                <div>
                    <span>{props.temperament}</span>
                </div>
            </div>
        </div>
    </div>
  );
}