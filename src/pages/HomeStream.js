import React, { Component } from 'react';
import GenerComponent from '../pages/generComponent';

class HomeStream extends Component {



  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      genres: [],
    }
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployeesFetchAPI = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1c95638de569c813b38012b2d1fe069d&language=en-US")
      .then(response => response.json())
      .then(result => {
        this.setState({ genres: result.genres, isFetching: false })
      })
      .catch(exception => {
        console.log(exception);
        this.setState({ ...this.state, isFetching: false });
      });
  };
  fetchEmployees = this.fetchEmployeesFetchAPI;



  render() {
    return (

      <div className="card-list">
        <div className="container ">
          {
            this.state.genres.map(gener =>

              <div key={gener.id}  className="rowContainer" >
                <h5 className="generTitle" >{gener.name}</h5>
                <GenerComponent generId={gener.id} />

              </div>

            )
          }

        </div>
      </div>
    );
  }
}



export default HomeStream;