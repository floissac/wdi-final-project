import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';

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
        <BackButton history={this.props.history} />
        <h3>Spots in { this.state.city.name}</h3>
        <ul>
          { this.state.city.name && this.state.city.places.map(place =>
            <li key={place.id}>{ place.title }</li>
          )}
        </ul>
      </div>

      // <div className="row">
      //   <div className="image-tile col-md-6">

      //     {this.state.country.name && this.state.country.cities.places.map(place => {
      //       return(
      //         <div key={place.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
      //           <Link to={`/countries/${place.id}`}>
      //             <p>{place.title}</p>
      //             <img src={place.image} className="img-responsive" />
      //           </Link>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
    );
  }
}

export default CitiesShow;
