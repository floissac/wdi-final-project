import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';
// import GoogleMap from '../utility/GoogleMap';

class CitiesShow extends React.Component {
  state = {
    city: {}
  }

  componentDidMount() {
    console.log(this.props.match.params);


    Axios
      .get(`/api/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}`)
      .then(res => this.setState({ city: res.data }))
      .catch(err => console.log(err));
  }

  deletePlace = () => {
    Axios
      .delete(`/api/countries/:countryId/cities/:cityId/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <BackButton history={this.props.history} />
          <h2>Spots in { this.state.city.name}</h2>

          { this.state.city.name && this.state.city.places.map(place =>
            <div key={place.id}>
              {/* <GoogleMap key={place.id} center={this.state.place.location} /> */}

              <div className="image-tile col-md-6">
                <div key={place.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                  <Link to={`/countries/${this.props.match.params.countryId}/cities/${this.state.city.id}/places/${place.id}`}>
                    <h4>{ place.title }</h4>
                    <img src={place.image} className="img-responsive" />
                  </Link>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    );
  }
}

export default CitiesShow;
