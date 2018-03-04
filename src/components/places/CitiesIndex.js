import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


import BackButton from '../utility/BackButton';
// import GoogleMap from '../utility/GoogleMap';

class CitiesIndex extends React.Component {
  state = {
    country: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/countries/${this.props.match.params.id}`)
      .then(res => this.setState({ country: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <BackButton history={this.props.history} />
          {this.state.country.name && this.state.country.cities.map(city => {
            return(
              <div key={city.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/countries/${this.state.country.id}/cities/${city.id}`}>
                  <p>{city.name}</p>
                  <img src={city.image} className="img-responsive" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CitiesIndex;
