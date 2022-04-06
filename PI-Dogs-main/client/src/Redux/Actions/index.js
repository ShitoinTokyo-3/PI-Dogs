import axios from 'axios';
import {NOT_FOUND, PRELOADED, DETAILS_DOG,
     ORDER_BY, FILTER_BY_TEMPERAMENTS, FILTER_BY_ORIGIN} from './nameCase'

export function getDogs(name){
    let data = {};
    if(name === undefined) name = '';
    return function  (dispatch){
        return axios.get(`/dogs?name=${name}`)
            .then(res => {
                if(typeof res.data === 'object'){
                    data = {
                        dogs: res.data,
                    }
                }else{
                    dispatch({type: NOT_FOUND})
                }
            })
            .then(() => {
                axios.get(`/temperament`)
                    .then(res => {
                        data = {
                            ...data,
                            temperaments: res.data,
                        }
                        dispatch({type: PRELOADED, payload: data})
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                dispatch({type: NOT_FOUND})
            })
    }
};

export function getDetails(idDog){
    return function(dispatch){
        return axios.get(`/dogs/${idDog}`)
            .then(res => {
                dispatch({type: DETAILS_DOG, payload: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }
};

export function orderBy(orderBy, aOrD) {
    console.log(orderBy, aOrD);
    return {type: ORDER_BY, payload: orderBy, order: aOrD}
}

export function filterByTemperaments(temperament) {
    return {type: FILTER_BY_TEMPERAMENTS, payload: temperament}
}

export function filterByOrigin(origin) {
    return {type: FILTER_BY_ORIGIN, payload: origin}
}

export const addDog  = async (data) => {
    try {
        const res = await axios({
            method: 'post',
            url: `/dog`,
            data
        })
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}



