import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './Search.css'
import loupe from './images/Loupe.png'

function Search(props) {
    return (
        <section className="search container">
            <form>
                <div className="div_search">
                    <label>Search</label>
                    <input className="input" type="search" id="search" autoComplete="off" />
                    <div className="div_btn"> <button className='btn' type="submit" name="search">
                        <img src={loupe} alt='Loupe' />
                    </button> </div>
                </div>
            </form>
        </section>
    )
}
export default Search;