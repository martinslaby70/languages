import {gql} from '@apollo/client';


export const getCountries = gql`
    {
        countries{
            name
            code
            capital
        }
    }
`;

export const getCountryDetails = gql`
    query($code: ID!){
        country(code: $code){
            languages{
                name
                code
                native
            }
        }
    }
`;