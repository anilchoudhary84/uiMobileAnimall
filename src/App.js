
import React from 'react';
import Header from './components/shared/Header';
import HomeStream from './pages/HomeStream';
import MovieDetailsComponent from './pages/MovieDetails';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (

    <div>

      <BrowserRouter>
        <div >
          <Header />
          <Route path="/" exact component={HomeStream} />
          <Route path="/movieDetails/:movieId" component={MovieDetailsComponent} />

        </div>
      </BrowserRouter>


    </div>
  )
}

export default App;