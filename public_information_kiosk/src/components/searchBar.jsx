import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import { Link } from 'react-router-dom';

const db = [
  { text: "Baggage Claim", href: "/inside-navigation" },
  { text: "Currency Exchange", href: "/inside-navigation" },
  { text: "Flight Information", href: "/inside-navigation" },
  { text: "Airport Directions", href: "/inside-navigation" },
  { text: "Airport Hotels", href: "/inside-navigation" },
  { text: "Ground Transports", href: "/inside-navigation" },
  { text: "Parking", href: "/inside-navigation" },
  { text: "Longes", href: "/inside-navigation" },
  { text: "Attactions", href: "/outside-navigation" },
  { text: "Restaurants", href: "/restaurants" },
  { text: "Flight Information", href: "/outside-navigation" },
  { text: "Housing", href: "/outside-navigation" },
  { text: "Transit", href: "/outside-navigation" },
  { text: "Shopping", href: "/outside-navigation" },
  { text: "Cuisines", href: "/outside-navigation" },
  { text: "Museum", href: "/outside-navigation" },
]

export default function SearchBar({ setShowSearchResults }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const currentInput = e.currentTarget.value
    setInput(currentInput);
    if (currentInput == "") {
      setShowSearchResults(false);
      setResults([]);
      return;
    }
    setShowSearchResults(true);
    const searchResults = [];
    for (const place of db) {
      if (place.text.toLocaleLowerCase().includes(currentInput.toLocaleLowerCase())) {
        searchResults.push(place);
      }
    }
    setResults(searchResults);
  }

  return (
    <div>
      <div className="input-wrapper">
        <input
          placeholder="Search..."
          value={input}
          onChange={handleInputChange}
        />
        <FaSearch id="search-icon" />
      </div>
      <ul class="list-group">
        {results.slice(0, 5).map(result => {
          return <li class="list-group-item">
            <Link to={result.href}>{result.text}</Link>
          </li>
        })}
      </ul>
    </div>

  )
}
