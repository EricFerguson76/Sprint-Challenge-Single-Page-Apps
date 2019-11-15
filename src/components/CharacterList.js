import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [info, setInfo] = useState([])


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        const characters = response.data.results
        setInfo(characters)
      });
  }, []);

  return (
    <section className="character-list">
      <SearchForm />
      <h2>{info.map((data, id) => {
        return (
          <CharacterCard
            key={id}
            name={data.name}
            species={data.species}
            status={data.status}
            image={data.image}

          />
        );
      })}

      </h2>
    </section>
  );
}
