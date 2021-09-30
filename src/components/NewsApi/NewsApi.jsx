import React, { Fragment } from 'react';

const NewsApi = ({ lista }) => {
    return (
        <div>
          
             {/* {
                 lista.map(news => 
                         <Fragment key={news.title} >
                            <a href={news.url} alt=""> {news.title} </a>
                            <p>{news.url}</p> 
                         </Fragment>
                )
            }  */}
              {
                lista.map(pokemon => 
                        <Fragment key={pokemon.name} >
                            <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                            <p>{pokemon.url}</p>
                        </Fragment>
                )
            } 
        </div>
    );
}

NewsApi.defaultProps = {
    lista: []
  }

export default NewsApi;