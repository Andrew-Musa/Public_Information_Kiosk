import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
export default function SearchBar() {
    
    return (
    <div className="input-wrapper">
      
      <input
        placeholder="Search..."
      />

    <FaSearch id="search-icon" />
    </div>
    )
}
