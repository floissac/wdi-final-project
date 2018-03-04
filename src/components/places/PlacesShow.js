import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';
import GoogleMap from '../utility/GoogleMap';

class PlacesShow extends React.Component {
  state = {
    place: {}
  }

  componentDidMount() {

    console.log(this.props.match.params);

    Axios
      .get(`/api/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}/places/${this.props.match.params.placeId}`)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  deletePlace = () => {
    Axios
      .delete(`/api/countries/${this.props.match.params.countryId}/cities/:cityId/places/:placesId/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">


        <div className="image-tile col-md-6">
          <BackButton history={this.props.history} />
          {' '}
          <h3>{this.state.place.title}</h3>
          <img src={this.state.place.image} className="img-responsive" />
        </div>
        <div className="col-md-6">

          <GoogleMap key={this.state.place.id} center={this.state.place.location} />
          {/* <h4>{this.state.place.location}</h4> */}
          <button className="main-button">
            <Link to={`/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}/places/${this.props.match.params.placeId}/edit`} className="standard-button">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
          </button>
          {' '}
          <button className="main-button" onClick={this.deletePlace}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>

        </div>
      </div>
    );
  }
}

export default PlacesShow;
