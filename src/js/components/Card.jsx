import React from 'react';

const Card = ({ titulo, aaaa, url_image }) => {
    return (
        <div className="row">
            <div className="card col-4">
                <img className="card-img-top" src={url_image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{aaaa}</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>

        </div>

    );
};






export default Card;