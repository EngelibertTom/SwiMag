import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";


export default function Articles() {

  const [data, setData] = useState([]);

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }



  useEffect(() => {
    getArticles()
  }, []);

  function displayMedia(type, url) {
    return <div><img className="img" src={"http://localhost:8000/media/" + url} /></div>
  }


  async function del(event) {
    let id = event.target.id
    console.log("refresh begi")
    const data = (await axios.delete('http://localhost:8000/articles/27' + id)).data;
    //setData(data);
  }

  return (
    <>
      <h1>
        SWIMAG
      </h1>
      <div>
        {data.map(x => <article key={x.id}>
          <h1 className="Article_title">{x.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: x.content }}></section><br></br>
          {displayMedia(x.mediaType, x.mediaURL)}
          <div className="text"><a href='/ArticleOne'>Read More</a></div>
          <button className="delete" id={x.id} onClick={del}>Delete</button>
          <hr></hr>
        </article>
        )}
      </div>
    </>
  );
}
