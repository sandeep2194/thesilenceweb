import React from 'react';

function CardImage(props) {
    return (
        <div className="card-image">
            {(props.newsitem.imageUrl !== '') ?
                <img src={props.newsitem.imageUrl} alt={props.newsitem.title} /> :
                <div></div>}
            <div className='card-title img-grad'>
                <div className='row'>
                    <img src={props.newsitem.authorImage} alt={props.newsitem.authorName} className="circle responsive-img authorimg col s2" />
                    <span className='col s10 title'>{props.newsitem.title}</span>
                </div>
            </div>
        </div>
    );
}

export default CardImage