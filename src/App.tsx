import React, { useEffect, useState } from 'react';
// components
import CountryList from './components/countryList';
import Settings from './components/settings';

// apollo setup
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

const App = () => {

  // settings
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showNative, setShowNative] = useState(false);

  useEffect(() => {

  },[itemsPerPage, showNative])

  return(
    <ApolloProvider client={client}>
      
        <CountryList 
          itemsPerPage={itemsPerPage}
          showNative={showNative}
        />

        <Settings 
          itemsPerPage={itemsPerPage} 
          showNative={showNative} 
          setItemsPerPage={setItemsPerPage} 
          setShowNative={setShowNative} 
        />
    </ApolloProvider>
  )
}

export default App;
