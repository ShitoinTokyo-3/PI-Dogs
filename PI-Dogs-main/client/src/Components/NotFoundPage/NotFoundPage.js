import s from './NotFoundPage.module.css';

export default function NotFoundPage(){
    return (
        <div className={s.container}>
            <h1 className={s.animation}>Doggo not found
                <span></span>
                <span></span>
                <span></span>
            </h1>
            <img src={'https://c.tenor.com/aHiukaE282UAAAAC/puglie-pug.gif'} alt="Not found D:"/>

        </div>
    )
    
}