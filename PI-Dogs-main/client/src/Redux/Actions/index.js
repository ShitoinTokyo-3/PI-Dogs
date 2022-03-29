import {NOT_FOUND, PRELOADED, DETAILS_DOG,
     ORDER_BY, FILTER_BY_TEMPERAMENTS, FILTER_BY_ORIGIN} from './nameCase'
export function getDogs(name){
    let data = {};
    if(name === undefined) name = '';
    return function  (dispatch){
        return fetch(`http://localhost:3001/dogs?name=${name}`)
            .then(response => response.json())
            .then(response => {
                if(typeof response === 'object'){
                    data = {
                        dogs: response
                    }
                }else{
                    dispatch({type: NOT_FOUND})
                }
            })
            .then(() => {
                fetch('http://localhost:3001/temperament')
                    .then(response => response.json())
                    .then(response => {
                        data = {
                            ...data,
                            temperaments:response
                        }
                        dispatch({type: PRELOADED, payload: data})
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                dispatch({type:NOT_FOUND})
            })
    }
};

export function getDetails(idDog){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs/${idDog}`)
            .then(response => response.json())
            .then(response => {
                dispatch({type: DETAILS_DOG , payload: response})
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

export function addDog(data){
    fetch("http://localhost:3001/dog", {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .catch(err => console.log(err));
}

