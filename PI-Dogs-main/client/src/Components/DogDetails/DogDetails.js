import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SecondNav from "../NavDeAndCr/Nav";
import { getDetails } from "../../Redux/Actions";
import Loading from "../Main/Loading/Loading"
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function DogDetails() {
    const dispatch = useDispatch();
    const { idDog } = useParams();
    const dog = useSelector(state => state.dog);


    useEffect(() => {
        dispatch(getDetails(idDog));
    } ,[]);

    return (
        <div className="container">
            <SecondNav />
            {Object.entries(dog).length === 0 ? <Loading /> :
            <div className="">
                {console.log(dog)}
                <div className="">
                    <img src={dog.image.url} alt={dog.name}  />
                </div>
                <div className="">
                    <h1>{dog.name}</h1>
                    <label htmlFor="Wmin">Weight min: </label>
                    <p name={'Wmin'} id= {'Wmin'}> {dog.weight.metric.split(' - ')[0]}</p>
                    <label htmlFor="Wmax">Weight max: </label>
                    <p name={'Wmax'} id= {'Wmax'}>{dog.weight.metric.split(' - ')[1]}</p>
                    <label htmlFor="Hmin">Height min: </label>
                    <p name={'Hmin'} id= {'Hmin'}>{dog.height.metric.split(' - ')[0]}</p>
                    <label htmlFor="Hmax">Height max: </label>
                    <p name={'Hmax'} id= {'Hmax'}>{dog.height.metric.split(' - ')[1]}</p>
                    <label htmlFor="LS">Life span: </label>
                    <p name={'LS'} id= {'LS'}>{dog.life_span} years</p>
                    <label htmlFor="T">Temperaments: </label>
                    <p name={'T'} id= {'T'}>{dog.temperament}</p>
                </div>
            </div>         
            }
            {dog === 'Doggo not found' ? <NotFoundPage/> : null} 
        </div>  
    )  
}