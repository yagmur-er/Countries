import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import Card from "../Card";
import "../../styles/countries.scss"

const Countries = () => {

    const [data, setData] = useState([]);
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    const [selectedRadio, setSelectedRadio] = useState("");
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data))
    }, []);

    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    
    };
    

    return (

        <div className='countries'>
            <ul className='radio-container' >

                {
                    radios.map((continent) => (
                        <li key={continent} >
                            <input type='radio' name='continent' id={continent}
                                onChange={(e) => setSelectedRadio(e.target.id)}
                            />
                            <label htmlFor={continent}> {continent} </label>
                        </li>
                    ))
                }

            </ul>

            
            <input
                className='search'
                type="text"
                placeholder="Enter a country name"
                onChange={(e)=> setSearchInput (e.target.value)}
            />

            <br />

            <ul>

                {
                    data
                        .filter((country) => country.region.includes(selectedRadio))
                        .filter ((country)=> country.name.common.toLowerCase().includes (searchInput.toLowerCase()))
                        .map((country) => (
                        <Card key={country.name.common} country={country} pop={numberFormat(country.population)} />
                        ))    
                }

            </ul>
        </div>

    );
};

export default Countries;