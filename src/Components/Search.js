import React, { useState } from 'react';
import './Search.css'
import Card from './UI/Card'

const Search = (props) => {

    return (

        <section className="search">
        <Card>
          <div className="search-input">
            <div>
                <label>Filter by TaskName</label>
                <input
                type="text"
                onChange={event => props.searched(event.target.value)}
                />

            </div>
           <div>
                <label>Filter by Status</label>
                <span>
                    <select  onChange= {event => props.searchedStatus(event.target.value)}>
                        <option value = "all" selected>All</option>
                            <option value="todo" >todo</option>
                            <option value="inprogress" >inprogress</option>
                            <option value="done">done</option>
                    </select>
                </span>
                
            </div>
          </div>
        </Card>
      </section>
    )
}

export default Search;