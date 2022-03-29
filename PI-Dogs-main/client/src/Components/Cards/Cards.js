import Card from './Card/Card';
import React from 'react';
// import './Cards.css';

export default function Cards(props){
    return (
        <div >
            {props.dogs.map(dog =>
             <Card 
             key={dog.id}
             id={dog.id}
             name={dog.name}
             image={dog.image.url} 
             weight={dog.weight.metric}
             temperament={dog.temperament}
              />
             )}
        </div>
    );
}
