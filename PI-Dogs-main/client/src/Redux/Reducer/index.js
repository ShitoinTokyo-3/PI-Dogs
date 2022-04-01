import {NOT_FOUND, PRELOADED, DETAILS_DOG, ORDER_BY, 
    FILTER_BY_TEMPERAMENTS, FILTER_BY_ORIGIN} from '../Actions/nameCase'

const initialState = {
    render: [],
    filter: [],
    notFound: false,
    dog:{},
    temperamentsRender: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRELOADED:
            return {
                ...state,
                render: action.payload.dogs,
                filter: [],
                temperamentsRender: action.payload.temperaments,
                notFound: false,
            };
        case DETAILS_DOG:
            return{
                ...state,
                dog: action.payload
            };
        case ORDER_BY:
            if(action.payload === 'Weight'){
                if(action.order === 'Ascending'){
                    let orAscR = state.render.sort((a, b) => a.weight.metric.split(' - ')[0] - b.weight.metric.split(' - ')[0]);
                    let orAscF = state.filter.sort((a, b) => a.weight.metric.split(' - ')[0] - b.weight.metric.split(' - ')[0]);
                    return {
                        ...state,
                        render: orAscR,
                        filter: orAscF
                    }
                }else if (action.order === 'Descending'){
                    let orDesR = state.render.sort((a, b) => b.weight.metric.split(' - ')[0] - a.weight.metric.split(' - ')[0]);
                    let orDesF = state.filter.sort((a, b) => b.weight.metric.split(' - ')[0] - a.weight.metric.split(' - ')[0]);

                    return {
                        ...state,
                        render: orDesR,
                        filter: orDesF
                    }
                }
            }else if(action.payload === 'Alphabetically'){
                if(action.order === 'Ascending'){
                    let orAscR = state.render.sort((a,b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        return 0;
                      })
                    let orAscF = state.filter.sort((a,b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        return 0;
                      })

                    return {
                        ...state,
                        render: orAscR,
                        filter: orAscF
                    }
                }else if (action.order === 'Descending'){
                    let orDesR = state.render.sort((a,b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        return 0;
                      })
                    let orDesF = state.filter.sort((a,b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        return 0;
                      })

                    return {
                        ...state,
                        render: orDesR,
                        filter: orDesF
                    }
                }
            };
        case FILTER_BY_TEMPERAMENTS:
            if(action.payload !== 'All'){
                return {
                    ...state,
                    filter: state.render.filter( dog =>
                        dog.temperament
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())
                    ),
                }
            }else{
                return {
                    ...state,
                    filter: [],
                }
            };
        case FILTER_BY_ORIGIN:
            if(action.payload === 'ALL'){
                console.log(state.render)
                return {
                    ...state,
                    filter: state.render,
                    notFound: false,
                }
            }
            if(action.payload === 'API'){
                return {
                    ...state,
                    filter: state.render.filter(dog => typeof dog.id === 'number'),
                    notFound: false,
                }
            }else if(action.payload === 'DB'){

                let dogsDataBase = state.render.filter(dog => typeof dog.id === 'string');
                if(dogsDataBase.length){
                return {
                    ...state,
                    filter : state.render.filter(dog => dog.id.toString().includes('-')),
                }
                }else {
                    state = {
                        ...state,
                        notFound: true,
                    }
                }
            };
        
        case NOT_FOUND:
            return {
                ...state,
                notFound: true
            };
        default: 
            return state;
    }
};

export default rootReducer;