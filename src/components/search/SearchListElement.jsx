import React from 'react';
import './search.css';

const SearchListElement = (props) => {
    return (
        <li key={props.route}>
            <h3 className="search-results-list__heading">
            <a href={props.route} className="search-results-list__link">{props.name}</a>
            </h3>
            <small>{props.route}</small>
            <p>
            {props.description}
            </p>
      </li>
    );
};

export default SearchListElement;