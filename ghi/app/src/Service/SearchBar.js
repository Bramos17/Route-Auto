import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();

        setSearchTerm("");

        navigate(`/search/list/${searchTerm}`);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
