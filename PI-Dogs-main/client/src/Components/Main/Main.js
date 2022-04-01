
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../Redux/Actions';
import { useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import Pagination from './Pagination/Pagination';
import Nav from './Nav/Nav.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loading from './Loading/Loading';


export default function Main(props){
    let dispach = useDispatch();
    let render = useSelector(state => state.render);
    let filter = useSelector(state => state.filter);
    let notFound = useSelector(state => state.notFound);

    useEffect(() => {
        dispach(getDogs())
    } , [])
    //----------------Configurar Pages--------------------//
    let [currentPage, setCurrentPage] = useState({ start :0, end: 8, currentPage:1 });
    const configPages = (value) => {
        if(value === 'back' && currentPage.start > 0){
            setCurrentPage({
                start: currentPage.start - 8,
                end: currentPage.end - 8,
                currentPage: currentPage.currentPage - 1
            })
        };
        if(value === 'next' && currentPage.currentPage !== Math.ceil(render.length / 8)){
            if(filter.length > 0 && currentPage.currentPage === Math.ceil(filter.length / 8)){
                return;
            }
            setCurrentPage({
                start: currentPage.start + 8,
                end: currentPage.end + 8,
                currentPage: currentPage.currentPage + 1
            })
        };
        if(value === 'restart'){
            setCurrentPage({
                start: 0,
                end: 8,
                currentPage: 1
            })
        };
    }
    let renderDogs = filter.length > 0 ? 
        filter.slice(currentPage.start, currentPage.end) : 
        render.slice(currentPage.start, currentPage.end);
    //----------------Configurar Pages--------------------//

let toggleRender = 
    renderDogs.length > 0 ?
    <div>
        <Cards dogs={renderDogs}/>
        <Pagination configPages={configPages} page={currentPage} />
    </div>: 
    <Loading />

    return (
        <div>
            <Nav configPages={configPages}/>
            {notFound === true ? <NotFoundPage/>: toggleRender}
        </div>
    );   
}