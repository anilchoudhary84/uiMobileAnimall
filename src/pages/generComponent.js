import React, { Component } from 'react';
import StreamCard from '../components/StreamCard';

class GenerComponent extends Component {



  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      streams: [],
      generId: this.props.generId,
      streamsArray: []
    }
  }

  componentDidMount() {
    this.fetchMoviesByGener();

  }

  fetchMoviesByGenerAPI = () => {

    this.setState({ ...this.state, isFetching: true });
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=1c95638de569c813b38012b2d1fe069d&with_genres=" + this.state.generId)
      .then(response => response.json())
      .then(result => {

        this.setState({ streams: result.results, isFetching: false })
      })
      .catch(exception => {
        console.log(exception);
        this.setState({ ...this.state, isFetching: false });
      });
  };
  fetchMoviesByGener = this.fetchMoviesByGenerAPI;



  StreamCards = (streams) =>
    streams.map(stream =>
      <div key={stream.id} className="moviebox">
        <StreamCard stream={stream} />
      </div>
    );


  render() {
    const { streams } = this.state;

    return (

      <div >
        {this.StreamCards(streams)}
      </div>
    );
  }
}



export default GenerComponent;