import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SecondNav from "../NavDeAndCr/Nav";
import { getDetails } from "../../Redux/Actions";
import Loading from "../Main/Loading/Loading"
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import s from "./DogDetails.module.css";

export default function DogDetails() {
    const dispatch = useDispatch();
    const { idDog } = useParams();
    const dog = useSelector(state => state.dog);


    useEffect(() => {
        dispatch(getDetails(idDog));
    } ,[]);

    return (
        <div>
            <SecondNav />
            {Object.entries(dog).length === 0 ? <Loading /> :
            <div className={s.container}>
                <div className={s.container1}>
                    <img src={dog.image.url} alt={dog.name}/>
                    <h2>{dog.name}</h2>
                </div>

                <div className={s.container2}>
                    <div className={s.container2_h2}>
                        <h2>{dog.name}</h2>
                    </div>
                    <div className={s.containerInfo}>
                        <div className={s.containerInfo_label}>
                            <label >Weight </label>
                        </div>
                        <div className={s.containerInfo_m}>
                            <div className={s.containerInfo_m}>
                                <span>min: </span>
                                <span>{dog.weight.metric.split(' - ')[0]}</span>
                            </div>
                            <div className={s.containerInfo_m}>
                                <span>max: </span>
                                <span>{dog.weight.metric.split(' - ')[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.containerInfo}>
                        <div  className={s.containerInfo_label}>
                            <label >Height </label>
                        </div>
                        <div className={s.containerInfo_m}>
                            <div className={s.containerInfo_m}>
                                <span>min: </span>
                                <span>{dog.height.metric.split(' - ')[0]}</span>
                            </div>
                            <div className={s.containerInfo_m}>
                                <span>max: </span>
                                <span>{dog.height.metric.split(' - ')[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.containerInfo}>
                        <div  className={s.containerInfo_label}>
                            <label >Life span </label>
                        </div>
                        <div className={s.containerInfo_m}>
                            <div className={s.containerInfo_m}>
                                <span>min: </span>
                                <span>{dog.life_span.split(' - ')[0]}</span>
                            </div>
                            <div className={s.containerInfo_m}>
                                <span>max: </span>
                                <span>{dog.life_span.split(' - ')[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.temps}>
                        <div>
                            <label >Temperaments: </label>
                        </div>
                        <div>
                            <span>{dog.temperament}</span>
                        </div>
                    </div>
                </div>
            </div>          
            }
            {dog === 'Doggo not found' ? <NotFoundPage/> : null} 
        </div>  
    )  
}