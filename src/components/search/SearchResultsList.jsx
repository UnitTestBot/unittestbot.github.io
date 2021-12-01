import React from 'react';
import SearchListElement from './SearchListElement';
import './search.css';

const SearchResultsList = (props) => {
    
    const objects = props.objects !== undefined ? props.objects: [];
    const results = objects.filter((obj) => 
      obj.name !== undefined && obj.description !== undefined && obj.route !== undefined
    );
  
    return (
      <section className="searchResults"  aria-label="Search results over documentation">
        <ol className="search-results-list">
          {
            results.map(obj =>
              <SearchListElement route={obj.route} name={obj.name} description={obj.description}/> 
            ) 
          }
        </ol>
      </section>
    );
};

export default SearchResultsList;
