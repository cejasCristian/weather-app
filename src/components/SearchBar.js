import React from 'react'
import './searchBarStyle.css';

const SearchBar = () => {

    return (
        <div className = 'container'>
            <form>
                <div className = 'row'>
                    <div className = 'col-md-3 py-1 offset-md-2'>
                        <input
                            className = 'form-control'
                            name = 'city'
                            type = 'text'
                            placeholder = 'City'
                        />
                    </div>
                    <div className = 'col-md-3 py-1'>
                        <input
                            className = 'form-control'
                            name = 'country'
                            type = 'text'
                            placeholder = 'Country'
                        />
                    </div>
                    <div className = 'col-md-3 mt-md-0 py-1 text-md-left'>
                        <button 
                            type="button"
                            className="btn btn-primary"
                        >Get Weather
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;