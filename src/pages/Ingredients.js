import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import './SearchBar.css';
// import ShowRecipes from './ShowRecipes';
import Axios from 'axios';
import Navbar from './NavBar';
// import Alert from './Alert';

function Ingredients() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    const getRecipes = () => {
        Axios.get(`https://api.edamam.com/search?q=${query}&app_id=439d148a&app_key=656b9f2c04daa032243be7bf3454c466`)
            .then(resp => setRecipes(resp.data.hits))

    };
    useEffect(() => { getRecipes() }, [query])
    console.log(recipes)

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setQuery(search)
        setSearch("");
    };



    return (
        <div className="ingredients-page">
            {/*BEGIN SEARCH BAR */}

            {/* <div className="App"> */}
            <div className="search-bar">
                <div className="search-container">
                    <form className="search-form" onSubmit={onSubmit}>
                        {/* { alert !== "" && <Alert alert={alert}/>} */}
                        <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={search} />
                        <input type="submit" value="search" />
                    </form>
                    <Navbar />
                </div>
            </div>

            {/*END SEARCH BAR */}

        </div>
    );

}

export default Ingredients