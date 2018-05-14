import React, {Component} from 'react';
import ReactMapboxGL, { Marker, Popup, Cluster }  from 'react-mapbox-gl';
import mapMarkerIcon from '../marker-icon.svg';
import axios from 'axios';
import { SERVER_URL } from '../constants';
const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOXAPI_KEY;

const Map = ReactMapboxGL({ accessToken: `${MAPBOX_API_KEY}` });

class MapWidget extends Component {
  constructor() {
    super();
    this.state = {
      homeAddressStreet: '',
      homeAddressCity: '',
      homeAddressState: '',
      homeAddressZip: ''
    }
  }

  componentDidMount() {
    axios.get(SERVER_URL + `/user/${this.props.user.id}`)
      .then(res => {
        this.setState({
          homeAddressStreet: res.data.homeAddressStreet,
          homeAddressCity: res.data.homeAddressCity,
          homeAddressState: res.data.homeAddressState,
          homeAddressZip: res.data.homeAddressZip
        })
      })
  }

  displayPopup() {
    console.log('hello popup')
    return (
      <Popup
        coordinates={[-122.338743, 47.608635]}
        offset={{
          'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
        }}>
        <span>Ambassador</span>
      </Popup>
    )
  }

  render() {
    return (
      <Map
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "500px",
          width: "500px"
        }}
        center={[-122.338743, 47.608635]}
        zoom={[15]} >
          <Marker
            coordinates={[this.props.user.homeAddressCoordinates[0], this.props.user.homeAddressCoordinates[1]]}
            anchor="bottom"
            onClick={this.displayPopup}>
            <img alt={"-122.338743, 47.608635"} src={mapMarkerIcon} height="45px" width="25px" />
          </Marker>
      </Map>
    );
  }
}

export default MapWidget;