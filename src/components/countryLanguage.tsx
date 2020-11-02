import React from 'react'

//graphql
import { getCountryDetails } from '../queries/queries';
import { useQuery } from '@apollo/client';

//interfaces
import ICountryLanguage from '../interfaces/ICountryLanguage';

interface props {
    countryCode: string 
}
const CountryDetails = ({countryCode}: props) => {

    const {data, loading, error} = useQuery(getCountryDetails, {
        variables: {code: countryCode}
    });
    
    const DisplayCountryDetails = () => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Something went wrong.. :(</p>
       
        
        const {country}: {country: ICountryLanguage} = data;

        const languages = country.languages.map(language => {
            console.log(language);
            
            return(
                <>{language.name}</>
            )
        });
       
        
        
        return(
        <p><span>Languages - </span>{languages}</p>
        )
    }


    return <DisplayCountryDetails />

}

export default CountryDetails;