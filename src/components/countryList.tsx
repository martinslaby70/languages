import React, { useState } from 'react'

//graphql
import { getCountries } from '../queries/queries';
import { useQuery } from '@apollo/client';

//interfaces
import ICountry from '../interfaces/ICountry';

//components
import CountryLanguage from './countryLanguage';
import Pagination from './pagination';


interface props {
    itemsPerPage: number,
    showNative: boolean,
}
const CountryList = ({itemsPerPage, showNative}:props) => {
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    
    //apollo
    const {data, loading, error} = useQuery(getCountries);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.. :(</p>
        
        

    const {countries}: {countries: ICountry[]} = data;
    
    const DisplayCountries = () => {
        //.slice(start, end)
        const selectedCountries = countries.slice((currentPage*itemsPerPage) - itemsPerPage , currentPage*itemsPerPage);
        const countriesItems = selectedCountries.map((country: ICountry) => {
            return (
                <li>
                    <h3>{country.name}<span> - {country.code}</span></h3>
                    <p><span>Capital city - </span>{country.capital}</p>
                    <CountryLanguage countryCode={country.code} key={country.code}/>
                </li>
            )
        });
        
        return(
            <ul>
                {countriesItems}
            </ul>
        )
    }

    

    return(
        <div>
            <div className="countriesContainer">
                <DisplayCountries />
                <Pagination totalItems={countries.length / itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            
        </div>
    )
}

export default CountryList;