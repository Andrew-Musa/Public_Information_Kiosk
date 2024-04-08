import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import { Link } from 'react-router-dom';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

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

export default function SearchBar({ setShowSearchResults, accessibleMode }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleInputChange = (currentInput) => {
    setInput(currentInput);
    if (currentInput == "") {
      setShowSearchResults(false);
      setShowKeyboard(false);
      setResults([]);
      return;
    }
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
          onClick={() => {
            setShowKeyboard(true)
            setShowSearchResults(true);
          }}
        />
        <FaSearch id="search-icon" />
      </div>
      <ul className="list-group">
        {results.slice(0, 3).map(result => {
          return <li className="list-group-item">
            <Link to={result.href}>{result.text}</Link>
          </li>
        })}
      </ul>
      {showKeyboard &&
        <div className={accessibleMode ? "keyboard-accessible" : "keyboard"}>
          <Keyboard
            layout={
              {
                default: [
                  "q w e r t y u i o p",
                  "a s d f g h j k l",
                  "{shift} z x c v b n m {backspace}",
                  "{space}"
                ],
                shift: [
                  "Q W E R T Y U I O P",
                  "A S D F G H J K L",
                  "{shift} Z X C V B N M {backspace}",
                  "{space}"
                ]
              }}
            onChange={handleInputChange}
          />
        </div>
      }
    </div>

  )
}
