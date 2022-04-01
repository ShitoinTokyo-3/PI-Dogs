import { useSelector } from 'react-redux';
import s from './Pagination.module.css';

export default function Pagination(props){
    let render = useSelector(state => state.render);
    let filter = useSelector(state => state.filter);

    let totalPages =
        filter.length > 0 ? filter.length / 8 :
        render.length / 8;
    
    totalPages = totalPages !== 0 ? totalPages : 1;

    return(
        <div className={s.container}>
            <div className={s.miniContainer}>
                <button
                className=''
                onClick={() => props.configPages('back')}
                >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Back</button>
                <label>
                    {props.page.currentPage} de {Math.ceil(totalPages)}
                </label>
                <button
                className=''
                onClick={() => props.configPages('next')}
                >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Next</button>
            </div>
        </div>
    )


}