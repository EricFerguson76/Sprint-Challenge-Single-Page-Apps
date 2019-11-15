import React, { useState } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <section className="search-form">
      <form>
        <label htmlFor='name'>Search</label>
        <input
          id='name'
          type='text'
          name='textfield'
          placeholder='Search'
          value={searchTerm}

        />
      </form>
    </section>
  );
}
