import React from 'react'

//graphql
import { getCountryDetails } from '../queries/queries';
import { useQuery } from '@apollo/client';

//interfaces
import ICountryLanguage from '../interfaces/ICountryLanguage';

interface props {
    countryCode: string,
    showNative: boolean 
}
const CountryDetails = ({countryCode, showNative}: props) => {

    const {data, loading, error} = useQuery(getCountryDetails, {
        variables: {code: countryCode}
    });
    
    const DisplayCountryLanguages = () => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Something went wrong.. :(</p>
       
        
        const {country}: {country: ICountryLanguage} = data;

        const languages = country.languages.map((language, index) => {
            
            const comma = country.languages.length === index + 1 ? '' : ', ';
            return showNative ?(
                <p>
                    {language.name} - <span className="light">({language.native})</span>{comma}
                </p>
            ):(
                <>
                    {language.name}{comma} 
                </>
            )
        });
       
        
        
        return (
            <p><span>Languages: </span>{languages}</p>
        )
    }


    return <DisplayCountryLanguages />

}

export default CountryDetails;