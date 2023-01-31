import React from 'react';

const GetArticles = (props) => {
  return (
    <>
      {props.articles.map(article => {
      return (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      )
     })}

     {/* {(typeof resp.articles == 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        resp.articles.map((article, i) => (
            <p key={i}>{article}</p>
        ))
      )} */}
    </>
  )
}

export default GetArticles
