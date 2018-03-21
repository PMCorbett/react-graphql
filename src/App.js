import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import AgencyList from './AgencyList';
import Project from './Project';
import AddAgency from './AddAgency';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink(),
  cache: new InMemoryCache(),
  dataIdFromObject: (o) => o.id,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <AgencyList />
          <div style={{ padding: '30px' }}>
            <hr />
          </div>
          <Project projectId={1} />
          <div style={{ padding: '30px' }}>
            <hr />
          </div>
          <AddAgency />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
