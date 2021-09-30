import React, { Fragment } from 'react';

const NewsApi = ({ lista }) => {
    return (
        <div>
          <h1>Noticias sugeridas para usted:</h1>
            {
                lista.map(news => 
                        <Fragment key={news.title} >
                            
                            <p>{news.title}</p>
                            <p>{news.category}</p>
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