import React from 'react';

function CardImage(props) {
    return (
        <div className="card-image">
            {(props.newsItem.imageUrl !== '') ?
                <img src={props.newsItem.imageUrl} alt={props.newsItem.title} /> :
                <div></div>}
            <div className='card-title img-grad'>
                <div className='row'>
                    <img src={props.newsItem.authorImage} alt={props.newsItem.authorName} className="circle responsive-img authorimg col s2" />
                    <span className='col s10 title'>{props.newsItem.title}</span>
                </div>
            </div>
        </div>
    );
}

export default CardImage