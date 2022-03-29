import { useSelector } from 'react-redux';

export default function Pagination(props){
    let render = useSelector(state => state.render);
    let filter = useSelector(state => state.filter);

    let totalPages =
        filter.length > 0 ? filter.length / 8 :
        render.length / 8;
    
    totalPages = totalPages !== 0 ? totalPages : 1;

    return(
        <div>
            <button
            className=''
            onClick={() => props.configPages('back')}
            >Back</button>
            <label>
                {props.page.currentPage} de {Math.ceil(totalPages)}
            </label>
            <button
            className=''
            onClick={() => props.configPages('next')}
            >Next</button>
        </div>
    )


}