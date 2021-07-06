import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearch(characters)
      });
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <section className="search-form">
      <form>
        <label htmlFor='name'>Search</label>
        <input
          id='name'
          type='text'
          name='text'
          placeholder='Search'
          value={search.query}
          onChange={handleChange}
          autoComplete='off'
        />
      </form>
      <div>
        {search.map((search) => {
          return <span>
            <img src={search.image} alt='' />
            <h2>{search.name}</h2>
            <h3>{search.species}</h3>
            <h3>{search.status}</h3>
          </span>

        })}
      </div>
    </section>
  );
}
