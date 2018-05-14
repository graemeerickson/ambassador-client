import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapWidget from './MapWidget';

class Home extends Component {
  render() {
    if (this.props.user) {
      if (this.props.user.role[0] === 'Neighborhood Ambassador') {
        return(
          <div>
            <br/>
            <p>Ambassador dashboard</p>
            <MapWidget user={this.props.user} />
          </div>
        );
      }
      else if (this.props.user.role[0] === 'Prospective Homebuyer') {
        return(
          <div>
            <br/>
            <p>Prospective Homebuyer dashboard</p>
            <MapWidget user={this.props.user} />
          </div>
        );
      }
    }
    return(
      <div>
        <br/><br/>
        <div className="splash-area"></div>
        <div className="jumbotron jumbotron-fluid home-jumbotron">
          <div className="container">
            <h1 className="display-4">Ambassador</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Prospective Homebuyer</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/homebuyer-registration"><button className="btn btn-primary role-button">Get started</button></Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Neighborhood Ambassador</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/ambassador-registration"><button className="btn btn-primary role-button">Get started</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;