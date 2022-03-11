
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.css'
import loupe from './images/Loupe.png'



function Search(props) {
    const [data, setData] = useState([]);

    async function getArticles() {
        const data = (await axios.get('http://localhost:8000/articles')).data;
        setData(data);
    }



    useEffect(() => {
        getArticles()
    }, []);

    function displayMedia(type, url) {
        return <img src={"http://localhost:8000/media/" + url} />
    }

    function filterContent(data, searchTerm) {
        const result = data.filter((data) => data.title.toLowerCase().includes(searchTerm)
        );
    
        setData(result); 
        } 
    
        function handleTextSearch  (e) {
        const searchTerm = e.currentTarget.value;
        axios.get("http://localhost:8000/articles").then(res => {
                if(res.data) {
                    filterContent(res.data, searchTerm);
                }
            });
        }

    return (
        <section className="search container">
            <form>
                <div className="div_search">
                    <label>Search</label>
                    <input className="input" type="search" id="search" autoComplete="off" onChange={handleTextSearch} />
                    <div className="div_btn"> <button className='btn' type="submit" name="search">
                        <img src={loupe} alt='Loupe' />
                    </button> </div>
                </div>
            </form>
            <div>
                {data.map(x => <article key={x.id}>
                    <h1 className="Article_title">{x.title}</h1>
                    <section dangerouslySetInnerHTML={{ __html: x.content }}></section>
                    {displayMedia(x.mediaType, x.mediaURL)}
                </article>
                )}
            </div>
        </section>

    )
}
export default Search;