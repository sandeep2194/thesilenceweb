import React from 'react';

function CardContent(props) {
    return (
        <div className='row'>
            <div className='col s10'>
                <div className="card-content">
                    <p className='para' onClick={() => (props.handlecontentopening(props.index))}> {props.newsitem.synopsis}
                        <span id={(props.newsitem.contentopen) ? 'less' : 'more'}>...</span>
                    </p>
                    <span id={(props.newsitem.contentopen) ? 'more' : 'less'}>
                        {props.newsitem.content.map((para, i) => ((para !== "undefined") && <p key={`${props.id}${i}`} className='para'>{para}</p>))}
                    </span>
                </div>
            </div>
            <div className='col s2 contentopen'>
                <i className="material-icons small"
                    onClick={() => (props.handlecontentopening(props.index))}
                >{(props.newsitem.contentopen) ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i>
            </div>
        </div>
    );
}

export default CardContent