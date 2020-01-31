import React, { useState } from 'react';
import './Search.css'
import Card from './UI/Card'

const Search = (props) => {

    // const [searchdata, setSearchData] = useState(null);
    // const setEnteredFilter = (value ) => {
    //     setSearchData(value);

    // }
    return (
        // <div></div>

        <section className="search">
        {/* {error && <ErrorModal onClose={clear}>{error}</ErrorModal>} */}
        <Card>
          <div className="search-input">
            <div>
                <label>Filter by TaskName</label>
                {/* {isLoading && <span>Loading...</span>} */}
                <input
                //   ref={inputRef}
                type="text"
                // value={searchdata}
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