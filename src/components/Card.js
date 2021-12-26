import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className='card'>
            <h3 className='card__title'>{props.title}</h3>
            <div className='row'>
            </div>
            <Link className='card__link' to={`/listings/${props.slug}`}>View Listing</Link>
        </div>
    );
};

card.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default card;
