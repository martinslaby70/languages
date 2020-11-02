import React from 'react';



// components
import CountryList from './components/countryList';

//apollo setup
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

const App = () => {


  return(
    <ApolloProvider client={client}>
      
        <CountryList />

    </ApolloProvider>
  )
}

export default App;
