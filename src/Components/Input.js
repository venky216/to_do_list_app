import React from 'react'
import '../index.css'
import '../App.css'
const Input = (props)=>{
    return(
        <div>
            <form onSubmit={props.addoption}>
            <div className="option-area">
            <input className="search-box option-box"  type="text"name="option" onChange={props.Changed}/>
            <button className="add-option-button">Add A Task</button>
            </div>
            </form>
        </div>

    )
}
export default Input;