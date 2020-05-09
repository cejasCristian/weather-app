import React from 'react'
import './searchBarStyle.css';

const SearchBar = (props) => {

    const {city, setCity, country, setCountry} = props

    const getInfo = e => {
        e.preventDefault();
        console.log('enviando');
    }


    return (
        <div className = 'container'>
            <form onSubmit = {getInfo}>
                <div className = 'row'>
                    <div className = 'col-md-3 py-1 offset-md-2'>
                        <input
                            className = 'form-control'
                            name = 'city'
                            type = 'text'
                            placeholder = 'City'
                            onChange = { e => setCity(e.target.value)}
                        />
                    </div>
                    <div className = 'col-md-3 py-1'>
                        <input
                            className = 'form-control'
                            name = 'country'
                            type = 'text'
                            placeholder = 'Country'
                            onChange = { e => setCountry(e.target.value)}
                        />
                    </div>
                    <div className = 'col-md-3 mt-md-0 py-1 text-md-left'>
                        <button 
                            type='submit'
                            className='btn btn-primary'
                        >Get Weather
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;