import React, {useState} from 'react'
import './searchBarStyle.css';

const SearchBar = ({getInfo, setLoading}) => {

     //state def
    const [city, setCity] = useState('');//Searchbar
    const [country, setCountry] = useState('');//Searchbar

    const [error, setError] = useState(false);

    const handleClick = () => {
        getInfo([city, country])

        if (city === '' || country === ''){
            setError(true);
            return;
        }
            setError(false);

        //Enable spinner
        setLoading(true);

        setTimeout( () => {
            setCity(city);
            setCountry(country);
            //Disable spinner
            setLoading(false);
        }, 3000);
    }

    


    return (
        <>
            <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-md-3 py-1 offset-md-2 '>
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
                        <div className = 'col-md-3 mt-md-0 py-1 text-md-left text-center'>
                            <button 
                                type ='submit'
                                className ='btn btn-outline-light text-center'
                                onClick = {handleClick}
                            >Get Weather
                            </button>
                        </div>
                    </div>
            </div>

            {(error) ? <p className = "error mt-2">All fields are required</p> : null}
            
        </>
    );
}

export default SearchBar;