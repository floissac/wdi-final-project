import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';

import Auth from '../../lib/Auth';

class PlacesEdit extends React.Component {
  state = {

    places: [
      {
        title: '',
        image: '',
        location: {
          lat: '',
          lng: ''
        }
      }
    ]


  };

  componentDidMount() {
    Axios
      .get(`/api/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}/places/${this.props.match.params.placeId}`)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const country = Object.assign({}, this.state.place, { [name]: value });
    this.setState({ country });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}/places/${this.props.match.params.placeId}`, this.state.place,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(res => this.props.history.push(`/countries/${this.props.match.params.countryId}/cities/${this.props.match.params.cityId}/places/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <PlacesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        place={this.state.place}
      />
    );
  }
}

export default PlacesEdit;
