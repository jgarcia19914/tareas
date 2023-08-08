import React from "react";
import SearchBar from "./SearchBar";


export default function SearchB() {
    return(
    <div>
    <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
    )
}