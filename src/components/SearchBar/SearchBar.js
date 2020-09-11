import React, { useState } from "react";
import SearchIcon from "../../assets/magnifying-glass.svg";
import CrossIcon from "../../assets/cross.svg";

export default () => {
  const [typing, isTyping] = useState(false);
  const [results, setResults] = useState([]);
  let timeout;

  function search(value) {
    const url = `http://localhost:4000/api/ships/${value}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("error");
        }
      })
      .then((data) => {
        setResults(data);
      });
  }

  function handleChange(e) {
    var value = e.currentTarget.value;
    if (value.length > 0) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        search(value);
      }, 1000);
    }
  }

  function handleBlur(e) {
    var value = e.currentTarget.value;
    if (value.length > 0) {
      search(value);
    } else {
      isTyping(false);
    }
  }

  function handleSubmit(e) {
    var value = document.getElementById("search-input").value;
    if (value.length > 0) search(value);
    isTyping(false);
    e.preventDefault();
  }

  function handleReset(e) {
    document.getElementById("search-input").value = "";
    isTyping(false);
    e.preventDefault();
  }

  return (
    <main>
      <form
        className="search-wrapper"
        onSubmit={(e) => handleSubmit(e)}
        onReset={(e) => handleReset(e)}
      >
        <input
          type="text"
          id="search-input"
          className="search-bar"
          name="search"
          placeholder={typing ? "" : "Search"}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          onFocus={() => isTyping(true)}
        />
        <button className="search-btn" type="reset">
          <img
            src={typing ? CrossIcon : SearchIcon}
            alt={typing ? "reset" : "submit"}
          />
        </button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id} className="results">
            {result.name}
          </li>
        ))}
      </ul>
    </main>
  );
};
