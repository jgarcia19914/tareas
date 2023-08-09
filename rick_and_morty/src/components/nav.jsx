import React from "react";
import SearchBar from "./SearchBar";

export default function SearchB({onSearch}) {
    return(
    <div>
     <SearchBar onSearch={onSearch} />
    </div>
    )
}