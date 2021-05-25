import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
class MovieDetailsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      movieId: this.props.match.params.movieId,
      movieDetails: {},
      movieRating: 0
    }
    console.log(props);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetailsAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch("https://api.themoviedb.org/3/movie/" + this.state.movieId + "?api_key=1c95638de569c813b38012b2d1fe069d&language=en-US")
      .then(response => response.json())
      .then(result => {
        console.log(result);

        this.setState({ movieRating: result.vote_average / 2 })
        this.setState({ movieDetails: result, isFetching: false })

      })
      .catch(exception => {
        console.log(exception);
        this.setState({ ...this.state, isFetching: false });
      });
  };
  fetchMovieDetails = this.fetchMovieDetailsAPI;



  render() {
    console.log(this.state.movieId)
    const { movieDetails } = this.state;

    const isFetching = this.state.isFetching;
    return (
      <div>
        {!isFetching ?
          <div className="container ">
            <div className="movieDetailsBox">
              <img
                alt={movieDetails.original_title}
                className="card-img-top"
                src={"https://image.tmdb.org/t/p/w500"+movieDetails.poster_path}
              />
              <div className="detailsContentBox">
                <div className="titleBoxRow">
                  <div className="titleBoxColumn left">
                    {movieDetails.original_title}

                  </div>

                  <div className="titleBoxColumn right">
                    <StarRatings
                      rating={this.state.movieRating}
                      starRatedColor="orange"
                      numberOfStars={5}
                      name='rating'
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </div>


                </div>
                <div className="spacer"></div>
                <div className="titleBoxRow">
                  <div className="titleBoxColumn100 left">
                    {movieDetails.release_date} | {movieDetails.runtime}-Mins

              </div>
                </div>


                <div className="spacer"></div>
                <div className="spacer"></div>

                <div className="titleBoxRow">
                  <div className="titleBoxColumn100 left">
                    Movie Description :
  {movieDetails.overview}
                  </div>
                </div>




              </div>




            </div>

          </div>
          : <div></div>
        }
      </div>

    );
  }
}



export default MovieDetailsComponent;