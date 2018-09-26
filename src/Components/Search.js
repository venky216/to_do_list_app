import React from 'react'
import '../index.css'
const Search = (props)=>{
    return(
        <div>
            <div className="form-wrapper">
                <input className="search-box" placeholder="search todos in a list...." id="search" type="search" name="search" onChange={props.searching}/>
            </div>
        </div>
    )
}

export default Search