import React, { Component } from 'react';

class Profile extends Component {
  render() {
    if (this.props.user) {
      if (this.props.user.role[0] === 'Prospective Homebuyer') {
        return (
          <div>
            <br/>
            <h1>Hi, {this.props.user.firstName}</h1><br/>
            <h5>Role: {this.props.user.role[0]}</h5>
            <h5>Desired Location</h5>
            <p className="profile-paragraph">
              {this.props.user.targetAddress}
            </p>
            <h5>Contact Information</h5>
            <p className="profile-paragraph">
              Email: {this.props.user.email}<br/>
              Phone: {this.props.user.phoneNumber}
            </p>
          </div>
        );
      }
      else {
        return (
          <div>
            <br/>
            <h1>Hi, {this.props.user.firstName}</h1><br/>
            <h5>Role: {this.props.user.role[0]}</h5><br/>
            <h5>Home Address</h5>
            <p className="profile-paragraph">
              {this.props.user.homeAddressStreet}<br/>
              {this.props.user.homeAddressCity},&nbsp;
              {this.props.user.homeAddressState}&nbsp;
              {this.props.user.homeAddressZip}
            </p>
            <h5>Contact Information</h5>
            <p className="profile-paragraph">
              Email: {this.props.user.email}<br/>
              Phone: {this.props.user.phoneNumber}
            </p>
          </div>
        );
      }
    }
    else {
      return(
        <div>
          <br/><br/>
          <h5><a href="/login">Log in</a> or get started by signing up as a <a href="/ambassador-registration">Neighborhood Ambassador</a> or a <a href="/homebuyer-registration">Prospective Homebuyer</a>.</h5>
        </div>
      );
    }
  }
}

export default Profile;