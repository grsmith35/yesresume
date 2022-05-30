import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Resume from './pages/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Views from './pages/Views';
import Login from './pages/Login';
import Admin from './pages/Admin';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     <div className="">
       <Router>
          <Nav></Nav>
          <main>
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin" component={Admin} />

              <Route component={Resume} />
            </Switch>
          </main>
          <Footer></Footer>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
