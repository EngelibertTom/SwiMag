import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

function Search(props){
    return(
        <form>
            <div>
                <label>Search</label>
                <input type="search" id="search" autoComplete="off"/>
            </div>
        </form>
    )
}
export default Search;