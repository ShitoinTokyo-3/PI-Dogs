import s from './Loading.module.css';
export default function Loading(){
    return (
        <div className={s.container}>
                <h1 className={s.animation}>Loading Doggos
                    <span></span>
                    <span></span>
                    <span></span>
                </h1>
                <img src={'https://c.tenor.com/UbO6S_5WO0YAAAAC/pug-puglie.gif'} 
                alt="loading"
                />
        </div>
    )
}